import React from 'react';

import Counter from '@/shared/UI/Counter';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/index.module.scss';
import leman from '../styles/leman.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/eye.ico" />
        <title>Home Page</title>
      </Head>
      <div>Home</div>
      <Image src={leman} alt="Фото Апофеоз Геркулеса2" width={500} />
      <div className={styles.testLine} />

      <Counter />
    </>
  );
}
