import React, { useEffect, useState } from 'react';
import styles from './QueueDrawer.module.css';
import QueueDivider from './QueueDivider/QueueDivider';
import QueueHeader from './QueueHeader/QueueHeader';
import { getRefreshTokens } from '../Spotify/spotifyOAuth';
import { getUsersQueue } from '../Spotify/spotifyAPI';

export default function QueueDrawer({updateQueue, setUpdateQueue}) {

  const [queue, setQueue] = useState({});
  
  useEffect(() => {
    getRefreshTokens().then(() => {
      getUsersQueue().then((queueResponse) => {
        setQueue(queueResponse);
      });
    });
    return () => {
      setUpdateQueue(false);
    };
  }, [updateQueue, setUpdateQueue]);
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <QueueHeader text='Currently playing:' />
        {/*<QueueItem />*/}
        <QueueDivider />
        <QueueHeader text='Queued:' />
        <QueueDivider />
      </div>
    </div>
  );
}