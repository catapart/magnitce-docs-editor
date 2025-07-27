/** Options for a `IndexedDBManager` instance */
export interface IndexedDBManagerOptions
{
    name: string;
    version: number;
    tableName?: string;
}

/** An asynchronous indexedDB wrapper  */
export class IndexedDBManager
{
    #isOpen: boolean = false;
    #isInitialized: boolean = false;
    #database?: IDBDatabase;
    // #tableName: string = "keyValue";

    get ready()
    {
        return this.#isOpen && this.#isInitialized;
    }

    /**
     * Await and validate opening a `Cache` instance
     * @param options target `CacheOptions` values
     * @returns a validated `Cache` instance
     */
    async init(options: IndexedDBManagerOptions)
    {
        if(this.#isOpen == true) { return; }
        const opened = await this.open(options);
        if(opened == false) { throw new Error("An error occurred opening the database."); }
    }
    /**
     * Create and then await and validate opening a `Cache` instance
     * @param options target `CacheOptions` values
     * @returns a validated `Cache` instance
     */
    static async init(options: IndexedDBManagerOptions)
    {
        const instance = new IndexedDBManager();
        await instance.init(options);
        return instance;
    }

    /**
     * Open the `Cache` instance's database and initialize its functionality
     * @param options target `CacheOptions` values
     * @returns a `boolean` to indicate success
     */
    async open(options: IndexedDBManagerOptions):Promise<boolean>
    {
        await this.#openDatabase(options);

        return this.ready;
    }
    /**
     * Opens an instance of an `IDBDatabase` database, and registers for upgrade events.  
     * Listens for `onupgradeneeded` to create an `IDBDatabase` instance if it does not exist, and upgrade the instance if it does.
     * @param options target `IndexedDBManagerOptions` values
     * @returns an awaitable `Promise`
     */
    async #openDatabase(options: IndexedDBManagerOptions)
    {
        return new Promise<void>((resolve, reject) =>
        {                
            const request = indexedDB.open(options.name, options.version);
            request.onsuccess = (event: Event) =>
            {
                const dbEvent = event.target as unknown as { result: IDBDatabase|undefined };
                this.#database = dbEvent.result;

                this.#isOpen = true;
                this.#isInitialized = true;
                resolve();
            };

            request.onupgradeneeded = async (event: IDBVersionChangeEvent) =>
            {
                const dbEvent = event.target as unknown as { result: IDBDatabase|undefined };
                this.#database = dbEvent.result;
                await this.#createDatabase(options);
                this.#isInitialized = true;
                this.#isOpen = true;
                resolve();
            };

            request.onerror = (event: Event) => { reject(event); }

        });
    }
    /**
     * Create the database instance's object stores
     * @param options target `IndexedDBManagerOptions` values
     * @returns an awaitable `Promise`
     */
    async #createDatabase(options: IndexedDBManagerOptions)
    {
        // called after upgradeneeded finished; no need to initialize;
        if(this.#isInitialized == true) { return; }
        
        const promises = [];
        for(const tableName of this.#tables)
        {
            promises.push(new Promise<void>(async (resolve, reject) =>
            {
                const objectStore = this.#database!.createObjectStore(tableName, { keyPath: "key" });
                objectStore.transaction.oncomplete = (_event: Event) =>
                {
                    resolve();
                }
                objectStore.transaction.onerror = (event: Event) =>
                {
                    reject(event);
                }
            }));
        }

        await Promise.allSettled(promises);

    }

    #tables: Set<string> = new Set();
    addTable(tableName: string)
    {
        if(this.#isInitialized == true) { throw new Error("Cannot add table after database has been initialized."); }

        this.#tables.add(tableName);
    }

    /**
     * Close the database connection and desconstruct the instance
     * @returns a `boolean` to indicate success
     */
    async close(): Promise<boolean>
    {
        if(this.#database == null) 
        { 
            this.#isOpen = false;
            return !this.#isOpen;
        }

        this.#database.close();

        this.#isOpen = false;
        return !this.#isOpen;
    }
    /**
     * Closes the current database instance, if it is open, and then deletes the database.
     * @returns a `boolean` to indicate success
     */
    async delete(): Promise<boolean>
    {        
        if(this.#isOpen)
        {
            await this.close();
        }

        return this.#deleteDatabase();
    }
    /**
     * Deletes the database.
     * @returns a `boolean` to indicate success
     */
    #deleteDatabase()
    {
        return new Promise<boolean>((resolve) =>
        {
            if(this.#database == null || this.#isInitialized != true) 
            { 
                throw new Error("Unable to delete an uninitialized database.");
            }
            const deleteRequest = indexedDB.deleteDatabase(this.#database!.name);
            deleteRequest.onsuccess = () =>
            {
                this.#database = undefined;
                this.#isInitialized = false;
                resolve(true);
            };
            deleteRequest.onerror = (error: unknown) =>
            {
                console.error(error);
                resolve(false);
            };
        });
    }
    
    /**
     * Open new transaction in the managed database
     * @param tables the tables to include in this transaction scope
     * @param transactionMode the `IDBTransactionMode` the transaction will operate in
     * @returns a new transaction on the managed database in the target mode
     */
    openTransaction(tables: string[], transactionMode: IDBTransactionMode = 'readwrite')
    {
        if(this.#database == null) { throw new Error("The database has not been opened."); }
        return this.#database.transaction(tables, transactionMode);
    }
    
}