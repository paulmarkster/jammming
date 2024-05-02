import React from 'react';
import styles from './QueueDrawer.module.css';
import QueueDivider from './QueueDivider/QueueDivider';
import QueueHeader from './QueueHeader/QueueHeader';

export default function QueueDrawer({updateQueue}) {
  
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