import React from 'react';
import RadioIcon from '@mui/icons-material/Radio';
import NavItem from '../NavItem/NavItem';

export default function NavItemMusicPlayer({page, setPage}) {

  return (
    <div onClick={() => setPage('Music Player')}>
      <NavItem icon={<RadioIcon />} text='Music Player' page={page} />
    </div>
  );
}