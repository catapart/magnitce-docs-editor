export class ProgressTimeout
{
    duration: number;
    startTime: number = performance.now();
    elapsedTime: number = 0;
    
    onUpdate?: (timestamp: number, timeLeft: number) => void;
    onComplete?: () => void;

    isPaused: boolean = false;

    #previousTimestamp: number = 0;
    
    #animationFrameHandle?: ReturnType<typeof requestAnimationFrame>;

    #animationFrameHandler = this.update.bind(this);


    constructor(duration: number, onUpdate?: (timestamp: number, timeLeft: number) => void, onComplete?: () => void)
    {
        this.duration = duration;
        this.onUpdate = onUpdate;
        this.onComplete = onComplete;
    }

    start()
    {
        this.clear();
        this.startTime = performance.now();
        this.#previousTimestamp = this.startTime;
        this.elapsedTime = 0;
        this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
    }

    pause()
    {
        this.isPaused = true;
        if(this.#animationFrameHandle != null)
        {
            cancelAnimationFrame(this.#animationFrameHandle);
        }
    }
    resume()
    {
        this.isPaused = false;
        this.#previousTimestamp = performance.now();
        this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
    }

    update(timestamp: number)
    {
        const delta = timestamp - this.#previousTimestamp;
        this.elapsedTime += delta;
        this.#previousTimestamp = timestamp;

        const timeLeft = this.duration - this.elapsedTime;
        if(this.onUpdate != null) { this.onUpdate(timestamp, timeLeft); }
        if(timeLeft > 0)
        {
            this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
        }
        else
        {
            if(this.onComplete != null)
            {
                this.onComplete();
            }
            this.clear();
        }
    }

    clear()
    {
        if(this.#animationFrameHandle != null)
        {
            cancelAnimationFrame(this.#animationFrameHandle);
        }
        this.isPaused = false;
    }
}