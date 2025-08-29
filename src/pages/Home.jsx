import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  // Placeholder data
  const recentlyPlayed = [
    { id: 1, title: 'Utopia', artist: 'Travis Scott', image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png' },
    { id: 2, title: 'Starboy', artist: 'The Weeknd', image: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
    { id: 3, title: 'My Beautiful Dark Twisted Fantasy', artist: 'Kanye West', image: 'https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF.jpg' },
    { id: 4, title: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg' },
    { id: 5, title: 'CTRL', artist: 'SZA', image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/SZA_-_Ctrl_cover.png' },
  ];

  const featuredPlaylists = [
    { id: 1, name: 'RapCaviar', description: 'The freshest in hip-hop.', image: 'https://i.scdn.co/image/ab67706f0000000213a5f28428350a4023c14b74' },
    { id: 2, name: 'Today\'s Top Hits', description: 'The biggest hits right now.', image: 'https://i.scdn.co/image/ab67706f00000002b545f942258c89134d634c4b' },
    { id: 3, name: 'Viva Latino', description: 'The best of Latin music.', image: 'https://i.scdn.co/image/ab67706f00000002492f43dc5d861d830b1abc1a' },
    { id: 4, name: 'Baila Reggaeton', description: 'The biggest reggaeton hits.', image: 'https://i.scdn.co/image/ab67706f000000028e3b73f7693952932c02c918' },
    { id: 5, name: 'Lofi Beats', description: 'Chill beats to relax/study to.', image: 'https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e' },
  ];

  return (
    <div className={styles.home}>
      <section>
        <h2 className={styles.sectionTitle}>Recently Played</h2>
        <div className={styles.gridContainer}>
          {recentlyPlayed.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Featured Playlists</h2>
        <div className={styles.gridContainer}>
          {featuredPlaylists.map((playlist) => (
            <div key={playlist.id} className={styles.gridItem}>
              <img src={playlist.image} alt={playlist.name} />
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
