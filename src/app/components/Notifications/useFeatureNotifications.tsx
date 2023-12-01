
import { useCallback, useEffect } from "react"

import styles from './Notifications.module.scss';
import { subscribe, unsubscribeAll } from "@/app/lib/pubsub";

export enum FeatureTopic {
    One = 'one',
    Two = 'two'
}

export const useFeatureNotifications = (showNotification: (notification: React.ReactNode) => void) => {
    const showOneNotification = useCallback(() => {
        showNotification(<div className={styles.notification}>One Notification, shown for 5s</div>)
    }, [showNotification]);

    const showTwoNotification = useCallback(() => {
        showNotification(<div className={styles.notification}>Another notification</div>)
    }, [showNotification]);

    useEffect(() => {
        const tokens = [
            subscribe(FeatureTopic.One, showOneNotification),
            subscribe(FeatureTopic.Two, showTwoNotification),
        ]
        return () => {
            unsubscribeAll(tokens);
        }
    }, [showOneNotification]);
}