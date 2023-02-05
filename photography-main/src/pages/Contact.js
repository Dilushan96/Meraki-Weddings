import React, { useState, useContext } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap,Marker  } from 'react-google-maps';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import WomanImg from '../img/contact/woman.png';
import { transition1 } from '../transitions';

const Contact = () => {
  const [location, setLocation] = useState({
    lat: 51.5074,
    lng: 0.1278
  });
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const Map = () => {
    const [location, setLocation] = useState({
      lat: 51.5074,
      lng: 0.1278
    });
  
    const MapWrapped = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={location}
      >
        <Marker position={location} />
      </GoogleMap>
    ));
  
    return (
      <MapWrapped
        googleMapURL={`https://www.google.com/maps/place/Meraki+Wedding+Studios/@6.8643462,80.006989,15z/data=!4m14!1m7!3m6!1s0x3ae251042aae4cf9:0x24f319d166d87189!2sMeraki+Wedding+Studios!8m2!3d6.8643462!4d80.006989!16s%2Fg%2F11rq0r84jf!3m5!1s0x3ae251042aae4cf9:0x24f319d166d87189!8m2!3d6.8643462!4d80.006989!16s%2Fg%2F11rq0r84jf`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  };
  

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4'
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='' />
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
