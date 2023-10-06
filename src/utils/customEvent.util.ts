export class CustomMessageEventApp {
    private eventName: string

    constructor(eventName: string) {
        this.eventName = 'custom:' + eventName
    }

    public sendMessage (params?: { details?: {} | null}){
        const customEvent = new CustomEvent(this.eventName, { detail: params?.details })
        document.dispatchEvent(customEvent)
    }

    public listenEvent (callback: () => unknown) {
        document.addEventListener(this.eventName, callback)
    }
}