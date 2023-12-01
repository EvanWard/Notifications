import PubSub from 'pubsub-js';
import type { Publish, Subscribe } from './types';

export const subscribe: Subscribe = (topic, callback) => {
    const token = PubSub.subscribe(topic, callback);
    return token;
};

export const publish: Publish = (topic, data) => {
    const isPublished = PubSub.publish(topic, data);
    return isPublished;
};

export const unsubscribe = (token: string): void => {
    PubSub.unsubscribe(token);
};

export const unsubscribeAll = (tokens: Array<string>): void => {
    tokens.forEach(unsubscribe);
};
