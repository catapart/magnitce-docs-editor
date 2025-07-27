import { IndexedDBManager } from "./idb-manager";

/** Options for a `Cache` instance */
export interface CacheOptions
{
    name: string;
    version: number;
    tableName?: string;
    identifier?: string;
}

export type CacheValueType = string
|number
|boolean
|Blob
|ArrayBuffer
|Uint8Array<ArrayBufferLike>
|null
|undefined;

/** An asynchronous indexedDB wrapper for storing key/value pairs  */
export class Cache
{
    isInitialized: boolean = false;

    #tableName: string;
    #datastore: IndexedDBManager;
    
    constructor(datastore: IndexedDBManager, tableName: string)
    {
        this.#datastore = datastore;
        this.#tableName = tableName;
        this.#datastore.addTable(this.#tableName);
        this.isInitialized = true;
    }
       

    //#region Data - Key/Value management

    /**
     * Get a value from the Key/Value table
     * @param key the key to match
     * @returns the value associated with the target key
     */
    async getValue<T extends CacheValueType = undefined>(key: string): Promise<T|null>
    {
        return this.#getData(this.#tableName, key);
    }
    /**
     * Get values from the Key/Value table
     * @param keys the keys to match
     * @returns the values associated with the target keys
     */
    async getValues<T extends CacheValueType = undefined>(keys: string[]): Promise<(T|null)[]>
    {
        return this.#getDataValues(this.#tableName, keys);
    }
    /**
     * Get all values from the Key/Value table
     * @returns an array of the values
     */
    async getAllValues<T extends CacheValueType = undefined>(): Promise<(T|null)[]>
    {
        return this.#getAllData<T>(this.#tableName);
    }
    /**
     * Set a value in the Key/Value table
     * @param key the key to assign a value to
     * @param value the value to assign to the target key
     */
    async setValue<T extends CacheValueType>(key: string, value: T)
    {
        await this.#setData(this.#tableName, key, value);
    }
    /**
     * Set values in the Key/Value table
     * @param items an array of key/value pairs defining the data to set
     */
    async setValues<T extends CacheValueType>(items: {key: string, value: T }[])
    {
        await this.#setDataValues(this.#tableName, items);
    }
    /**
     * remove values from the Key/Value table
     * @param keys an array of keys to remove from the cache
     */
    async removeValues(...keys: string[])
    {
        await this.#removeData(this.#tableName, ...keys);
    }
    /**
     * remove values from the Key/Value table
     * @param keys an array of keys to remove from the cache
     */
    async clear()
    {
        await this.#clearData(this.#tableName);
    }

    //#endregion

    //#region Data Management

    /**
     * Get all data stored in the target `IDBObjectStore`
     * @param storeName the name of the `IDBObjectStore` to collect data from
     * @returns an array of all values stored in the target `IDBObjectStore`
     */
    async #getAllData<T extends CacheValueType = undefined>(storeName: string): Promise<(T|null)[]>
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName], 'readonly');
        transaction.onerror = (event: Event) => { throw event; }
        const value = await new Promise<(T|null)[]>((resolve, reject) =>
        {
            const objectStore = transaction.objectStore(storeName);
            const request = objectStore.getAll();
            request.onsuccess = (event: Event) =>
            {
                const items = (event.target as unknown as { result: { value: T }[] }).result;
                const result = items == null ? [] : items.map(item => item.value);
                resolve(result);
            }
            request.onerror = (event: Event) => { reject(event); }
        });
        return value;
    }
    /**
     * Get the value of an entry in the target `IDBObjectStore`, by key
     * @param storeName the name of the `IDBObjectStore` to get the value from
     * @param key the key to match 
     * @returns the value assigned to the matching key, or null
     */
    async #getData<T extends CacheValueType = undefined>(storeName: string, key: string): Promise<T|null>
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName], 'readonly');
        transaction.onerror = (event: Event) => { throw event; }
        const value = await new Promise<T|null>((resolve, reject) =>
        {
            const objectStore = transaction.objectStore(storeName);
            const request = objectStore.get(key);
            request.onsuccess = (event: Event) =>
            {
                const record = (event.target as unknown as { result: { value: T } }).result;
                const result = record == null ? null : record.value;
                resolve(result);
            }
            request.onerror = (event: Event) => { reject(event); }
        });
        return value;
    }
    /**
     * Get the values of the entries in the target `IDBObjectStore`, by keys
     * @param storeName the name of the `IDBObjectStore` to get the values from
     * @param keys the keys to match 
     * @returns an array of the values assigned to the matching keys, or null
     */
    async #getDataValues<T extends CacheValueType = undefined>(storeName: string, keys: string[]):  Promise<(T|null)[]>
    {
        const transaction = this.#datastore.openTransaction([storeName], 'readonly');
        const promises: Promise<T|null>[] = [];
        for(let i = 0; i < keys.length; i++)
        {
            const id = keys[i];
            promises.push(new Promise<T|null>((resolve, reject) =>
            {
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.get(id);
                request.onsuccess = (event: Event) =>
                {
                    const record = (event.target as unknown as { result: { value: T } }).result;
                    resolve(record == null ? null : record.value);
                }
                request.onerror = (event: Event) => { reject(event); }
            }));
        }

        const records = await Promise.all(promises);
        return records;
    }
    /**
     * Set the value of an entry in the target `IDBObjectStore`, by key
     * @param storeName the name of the `IDBObjectStore` to set the values in
     * @param key the key to match 
     * @param value the value to assign to the matching key
     */
    async #setData<T extends CacheValueType = undefined>(storeName: string, key: string|number, value: CacheValueType)
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName]);
        transaction.onerror = (event: Event) => { throw event; }
        
        await new Promise((resolve, reject) =>
        {
            const objectStore = transaction.objectStore(storeName);
            const request = (value == undefined) ? objectStore.delete(key) : objectStore.put({key, value});
            request.onsuccess = (event: Event) =>
            {
                const value = (event.target as unknown as { result: T }).result;
                resolve(value);
            }
            request.onerror = (event: Event) => { reject(event); }
        });
    }
    /**
     * Set the values of an entries in the target `IDBObjectStore`, by keys
     * @param storeName the name of the `IDBObjectStore` to set the values in
     * @param values an array of key/value pairs defining the data to set
     */
    async #setDataValues(storeName: string, values:{ key: string|number, value: CacheValueType }[])
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName]);
        transaction.onerror = (event: Event) => { throw event; }
        const objectStore = transaction.objectStore(storeName);
        const promises: Promise<unknown>[] = [];
        for(let i = 0; i < values.length; i++)
        {
            const value = values[i];
            promises.push(new Promise((innerResolve, innerReject) =>
            {
                const request = (value.value == undefined) ? objectStore.delete(value.key) : objectStore.put(value);
                request.onsuccess = (event: Event) =>
                {
                    const value = (event.target as unknown as { result: unknown }).result;
                    innerResolve(value);
                }
                request.onerror = (event: Event) => { innerReject(event); }
            }));
        }

        await Promise.all(promises);
    }
    /**
     * Remove an entries from the target `IDBObjectStore`, by key
     * @param storeName the name of the `IDBObjectStore` to remove the values from
     * @param keys the keys to match 
     */
    async #removeData(storeName: string, ...keys: (string|number)[])
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName]);
        transaction.onerror = (event: Event) => { throw event; }
        await new Promise((resolve, _reject) =>
        {
            const objectStore = transaction.objectStore(storeName);
            const promises: Promise<unknown>[] = [];
            for(let i = 0; i < keys.length; i++)
            {
                const key = keys[i];
                promises.push(new Promise((innerResolve, innerReject) =>
                {
                    const request = objectStore.delete(key);
                    request.onsuccess = (event: Event) =>
                    {
                        const value = (event.target as unknown as { result: unknown }).result;
                        innerResolve(value);
                    }
                    request.onerror = (event: Event) => { innerReject(event); }
                }));

            }

            resolve(Promise.all(promises));
        });
    }
    /**
     * Clear all entries from the target `IDBObjectStore`
     * @param storeName the name of the `IDBObjectStore` to remove the values from
     * @param keys the keys to match 
     */
    async #clearData(storeName: string)
    {
        if(this.#datastore == null) { throw new Error("The database has not been opened."); }
        const transaction = this.#datastore.openTransaction([storeName]);
        transaction.onerror = (event: Event) => { throw event; }
        await new Promise((resolve, reject) =>
        {
            const objectStore = transaction.objectStore(storeName);
            const request = objectStore.clear();
            request.onsuccess = (event: Event) =>
            {
                const value = (event.target as unknown as { result: unknown }).result;
                resolve(value);
            }
            request.onerror = (event: Event) => { reject(event); }
        });
    }

    //#endregion
}