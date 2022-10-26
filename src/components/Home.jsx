import React from 'react';
import './Home.scss';
import axios from 'axios';

const Home = () => {
  const onClick = () => {
    axios.get('http://localhost:8000/api/topics').then(res => {
      console.log(res);
    });
  };
  return (
    <div className='background'>
      <div>
        <h1 className='title'>Jist</h1>
        <form className='search-container'>
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
              fillRule='nonzero'
              stroke='none'
              strokeWidth='1'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='10'
              strokeDasharray=''
              strokeDashoffset='0'
              fontFamily='none'
              fontWeight='none'
              fontSize='none'
              textAnchor='none'
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
          <div className='button' onClick={onClick}>
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
