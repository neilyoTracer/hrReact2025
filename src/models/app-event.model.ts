import mitt from "mitt";

export enum AppGlobalEventsType {
    TEST = 'TEST'
}

export interface GlobalMessage {
    type: AppGlobalEventsType,
    data: any;
}

export const AppCustomEvent = Symbol('custom-event');

export type AppEvents = {
    [key: symbol]: GlobalMessage
}

export const AppBus = mitt<AppEvents>();