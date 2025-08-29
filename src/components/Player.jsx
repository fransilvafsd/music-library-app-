import React from 'react';
import styles from './Player.module.css';

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.songInfo}>
        <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png" alt="Utopia" />
        <div>
          <h3>Utopia</h3>
          <p>Travis Scott</p>
        </div>
      </div>
      <div className={styles.controls}>
        <p>Play / Pause / Next / Prev</p>
      </div>
      <div className={styles.volume}>
        <p>Volume controls</p>
      </div>
    </div>
  );
};

export default Player;
