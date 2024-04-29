import React from 'react';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import NavItem from './NavItem';

export default function NavItemAddToQueue({page, setPage}) {

  return (
    <div onClick={() => setPage('Add to Queue')}>
      <NavItem icon={<AddToQueueIcon />} text='Add to Queue' page={page}/>
    </div>
  );
}