import React from 'react';
import {useTheme} from '../context/ThemeContext';
import lights from '../assets/lights.png';
import styles from '../styles/Settings.module.css';
import darks from '../assets/darks.png';

function Settings() {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.layout}>

     
      <div className={styles.sidebar}>
        <h1>Site Settings</h1>
      </div>


      <div className={styles.appearanceContainer}>
       

        <div className={styles.themePreviewContainer}>

      
          <div className={styles.themePreview}>
            <h3>Light Theme</h3>

            <img
              src={lights}
              alt="Light theme preview"
              className={styles.previewImage}
            />


            <button className={styles.toggleButton} onClick={toggleTheme}>
              Toggle Theme
            </button>
          </div>

          <div className={styles.themePreview}>
            <h3>Dark Theme</h3>

            <img
              src={darks}
              alt="Dark theme preview"
              className={styles.previewImage}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;