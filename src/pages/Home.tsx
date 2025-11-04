import React from 'react';
import { SITE_OWNER } from '../config';
import './Home.css';

import ReactMarkdown from 'react-markdown';
import bio from '../data/markdown/bio.md';

const HEADSHOT_IMG_PATH = './images/headshot.jpg';

const Home: React.FC = () => {
  return (
    <div className='home-page'>
      <img src={HEADSHOT_IMG_PATH} alt='Headshot' className='headshot' />
  <h1 className='title'>{SITE_OWNER}</h1>
      <div className='bio'>
        <ReactMarkdown>{bio}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;
