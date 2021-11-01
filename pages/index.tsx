import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useRef, useState, useEffect } from 'react';
import * as smoothscroll from 'smoothscroll-polyfill';

import { AboutBlock, Navigation, TitleBlock, ProjectBlock, ContactBlock } from '../components';

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const arcadeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    smoothscroll.polyfill();
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width <= 768;

  return (
    <div className={styles.container}>
      <Head>
        <title>Phong</title>
        <meta name="description" content="Phong Le portfolio website" />
        <link rel="icon" href="/myicon.ico" />
      </Head>
      <main className={styles.main}>
        {isMobile || (
          <Navigation
            refs={[
              { name: 'About', ref: aboutRef },
              { name: 'Projects', ref: projectRef },
              // { name: 'Awards', ref: awardRef },
              // { name: 'Arcade', ref: arcadeRef },
              { name: 'Contact', ref: contactRef }
            ]}
          />
        )}
        <TitleBlock />
        <AboutBlock ref={aboutRef} />
        <ProjectBlock ref={projectRef} />
        <ContactBlock ref={contactRef} />
      </main>
    </div>
  );
};

export default Home;
