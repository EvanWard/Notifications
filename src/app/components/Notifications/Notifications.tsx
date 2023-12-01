'use client';

import React, { useRef, useState } from "react";
import styles from './Notifications.module.scss';
import { useFeatureNotifications } from "./useFeatureNotifications";

export const Notifications: React.FC = () => {
    const timerRef = useRef<NodeJS.Timeout>();
    const [notification, setNotification] = useState<React.ReactNode>();

    const showNotification = (note: React.ReactNode) => {
        setNotification(note);

        hideNotificationAfterTimeout();
    };

    const hideNotification = () => {
        setNotification(undefined);
        timerRef.current = undefined;
    };

    const hideNotificationAfterTimeout = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(hideNotification, 5000);
    };

    useFeatureNotifications(showNotification);

    if (!notification) {
        return null;
    }

    return (
        <div className={styles.container}>
            {notification}
        </div>
    );
};
