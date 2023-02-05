import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.facebook.com/merakiweddingstudios' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/meraki.weddingstudios/' target='_blank'>
            <ImInstagram />
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default Socials;
