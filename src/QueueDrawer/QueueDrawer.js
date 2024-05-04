import React, { useEffect, useState } from 'react';
import styles from './QueueDrawer.module.css';
import QueueDivider from './QueueDivider/QueueDivider';
import QueueHeader from './QueueHeader/QueueHeader';
import { getRefreshTokens } from '../Spotify/spotifyOAuth';
import { getUsersQueue } from '../Spotify/spotifyAPI';
import QueueItem from './QueueItem/QueueItem';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function QueueDrawer({updateQueue, setUpdateQueue}) {

  const [queue, setQueue] = useState(false);
  
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

  let playing;
  if (queue && queue.currently_playing !== null) {
    playing = (<QueueItem icon={<AudiotrackIcon />} name={queue.currently_playing.name} artist={queue.currently_playing.artists[0].name} />);
  } else {
    playing = (<QueueItem icon={<RemoveCircleOutlineIcon />} name={'Queue is empty'} artist={'Add to Queue'} />);
  };

  let queueList;
  if (queue && queue.queue.length !== 0) {
    queueList = (
      queue.queue.map(item => (
        <QueueItem key={item.id} icon={<AudiotrackIcon />} name={item.name} artist={item.artists[0].name} />
      ))
    )
  } else {
    queueList = (<QueueItem icon={<RemoveCircleOutlineIcon />} name={'Queue is empty'} artist={'Add to Queue'} />);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <QueueHeader text='Currently playing:' />
        {playing}
        <QueueDivider />
        <QueueHeader text='Queued:' />
        {queueList}
        <QueueDivider />
      </div>
    </div>
  );
}