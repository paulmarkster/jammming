import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavItem from '../NavItem/NavItem';

export default function NavItemWelcome({page, setPage}) {

  return (
    <div onClick={() => setPage('Welcome')}>
      <NavItem icon={<HomeOutlinedIcon />} text='Welcome' page={page} />
    </div>
  );
}