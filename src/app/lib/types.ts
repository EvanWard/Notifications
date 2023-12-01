export type Publish = (topic: string, data: unknown) => boolean;
export type Subscribe = (topic: string, callback: (topic: string, data: unknown) => void) => string;
