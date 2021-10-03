import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='background'>
      <div>
        <h1 className='title'>Jist</h1>
        <form class='search-container'>
          <input
            type='text'
            id='search-bar'
            placeholder='What confusing topic may I help with today?'
          />
          <svg
            className='search-icon'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='50'
            height='50'
            viewBox='0 0 172 172'
            style={{ fill: '#000000' }}
          >
            <g
              fill='none'
              fill-rule='nonzero'
              stroke='none'
              stroke-width='1'
              stroke-linecap='butt'
              stroke-linejoin='miter'
              stroke-miterlimit='10'
              stroke-dasharray=''
              stroke-dashoffset='0'
              font-family='none'
              font-weight='none'
              font-size='none'
              text-anchor='none'
              style={{ mixBlendMode: 'normal' }}
            >
              <path d='M0,172v-172h172v172z' fill='none'></path>
              <g fill='#8c00ff'>
                <path d='M55.04,17.2v144.48l75.68,-72.24z'></path>
              </g>
            </g>
          </svg>
        </form>
        <div className='button-container'>
          <div className='button'>
            <p>View all 👀</p>
          </div>
          <div className='button'>
            <p>Random Select 🎲</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
