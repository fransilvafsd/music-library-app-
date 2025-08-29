import React from 'react';
import styles from './Browse.module.css';

const Browse = () => {
  const genres = [
    { id: 1, name: 'Pop', image: 'https://i.scdn.co/image/ab67706f0000000213a5f28428350a4023c14b74' },
    { id: 2, name: 'Hip-Hop', image: 'https://i.scdn.co/image/ab67706f00000002b545f942258c89134d634c4b' },
    { id: 3, name: 'Rock', image: 'https://i.scdn.co/image/ab67706f00000002492f43dc5d861d830b1abc1a' },
    { id: 4, name: 'Latin', image: 'https://i.scdn.co/image/ab67706f000000028e3b73f7693952932c02c918' },
    { id: 5, name: 'Electronic', image: 'https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e' },
    { id: 6, name: 'K-Pop', image: 'https://i.scdn.co/image/ab67706f00000002978b9f4a4f8b9f5b8f8b8f8b' },
    { id: 7, name: 'R&B', image: 'https://i.scdn.co/image/ab67706f0000000213a5f28428350a4023c14b74' },
    { id: 8, name: 'Indie', image: 'https://i.scdn.co/image/ab67706f00000002b545f942258c89134d634c4b' },
  ];

  const newReleases = [
    { id: 1, title: 'Utopia', artist: 'Travis Scott', image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png' },
    { id: 2, title: 'Starboy', artist: 'The Weeknd', image: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
    { id: 3, title: 'My Beautiful Dark Twisted Fantasy', artist: 'Kanye West', image: 'https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF.jpg' },
    { id: 4, title: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg' },
    { id: 5, title: 'CTRL', artist: 'SZA', image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/SZA_-_Ctrl_cover.png' },
  ];

  return (
    <div className={styles.browse}>
      <section>
        <h2 className={styles.sectionTitle}>Browse Genres</h2>
        <div className={styles.gridContainer}>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.gridItem}>
              <img src={genre.image} alt={genre.name} />
              <h3>{genre.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>New Releases</h2>
        <div className={styles.gridContainer}>
          {newReleases.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
