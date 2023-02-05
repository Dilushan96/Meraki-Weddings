import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/b3.jpg';
import Image2 from '../img/portfolio/b4.jpg';
import Image3 from '../img/portfolio/b5.jpg';
import Image4 from '../img/portfolio/b6.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
import './portfolio.css';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container relative' style={{ marginLeft: '10rem' }}>
        <div className='flex flex-col lg:flex-row items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
            Welcome to Meraki, where we specialize in capturing the magic of your special day in a light and airy style.
             we believe that wedding photography should be an elegant expression of love, 
            joy and beauty, and our goal is to make your memories last a lifetime.
            </p>

          </motion>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2'
          >
            {/* image */}
            <div className='relative'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
              />
              <div className='absolute bottom-0 left-0 p-4 text-white text-xl transition-all duration-500'>
               WEDDINGS
              </div>
              </div>
            </div>
            <div className='relative'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''

              />
              <div className='absolute bottom-0 left-0 p-4 text-white text-xl transition-all duration-500'>
               ENGAGEMENTS
              </div>
              </div>
            </div>
            <div className='relative'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
              <div className='absolute bottom-0 left-0 p-4 text-white text-xl transition-all duration-500'>
               CASUAL SHOOTS
              </div>
              </div>
            </div>
            <div className='relative'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
              <div className='absolute bottom-0 left-0 p-4 text-white text-xl transition-all duration-500'>
               HOME COMING
              </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      <div>
      <h1>WEDDINGS</h1>
      </div>

        <div class="flex flex-wrap gap-5">
          
          <div>
          <div>
  <Link to="photography-main\src\sub\weddings\wed1\wed1.js">
    <img
      className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
      src={Image4}
      alt=''
      
    />
    
  </Link>
</div>

          </div>
          <div>
          <Link to="photography-main\src\sub\weddings\wed1\wed2.js">
          <img
                className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
          </Link>
          
          </div>
          <div>
          <Link to="photography-main\src\sub\weddings\wed1\wed3.js">
          <img
                className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
          </Link>
          </div>
          <div>
          <Link to="photography-main\src\sub\weddings\wed1\wed4.js">
          <img
                className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
          </Link>
          </div>
          <div>
          <Link to="photography-main\src\sub\weddings\wed1\wed5.js">
          <img
                className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
          </Link>
          </div>
          <div>
          <Link to="photography-main\src\sub\weddings\wed1\wed6.js">
          <img
                className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
          </Link>
          </div>
        </div>
        <h1>ENGAGEMENTS</h1>
      

      <div class="flex flex-wrap gap-5">
        
        <div>
        <Link to="photography-main\src\sub\engagements\e1\e1.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        
        </div>
        <div>
        <Link to="photography-main\src\sub\engagements\e1\e2.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>
        <div>
        <Link to="photography-main\src\sub\engagements\e1\e3.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>

        
      </div>
      <h1>CASUAL SHOOT</h1>
      

      <div class="flex flex-wrap gap-5">
        
        <div>
        <Link to="photography-main\src\sub\casualshoots\c1\c1.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        
        </div>
        <div>
        <Link to="photography-main\src\sub\casualshoots\c1\c2.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>
        <div>
        <Link to="photography-main\src\sub\casualshoots\c1\c3.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>

        
      </div>
      <h1>HOMECOMINGS</h1>
      

      <div class="flex flex-wrap gap-5">
        
        <div>
        <Link to ="photography-main\src\sub\homecomings\h1\h1.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        
        </div>
        <div>
        <Link to ="photography-main\src\sub\homecomings\h1\h2.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>
        <div>
        <Link to ="photography-main\src\sub\homecomings\h1\h3.js">
        <img
              className='object-cover lg:h-[300px] hover:scale-110 transition-all duration-500'
              src={Image4}
              alt=''
            />
        </Link>
        </div>

        
      </div>
    
      
      
    </motion.section>
  );
};

export default Portfolio;
