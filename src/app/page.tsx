'use client';

import React from "react";
import styles from "./page.module.scss";
import { publish } from "@/app/lib/pubsub";
import { FeatureTopic } from "./components/Notifications/useFeatureNotifications";

const Home: React.FC = () => {

  return (
    <>
      <h1>Hello</h1>
      <div>
        <button onClick={() => publish(FeatureTopic.One, undefined)}>Show Notification 1</button>
        <button onClick={() => publish(FeatureTopic.Two, undefined)}>Show Notification 2</button>
      </div>
    </>
  )
}

export default Home;
