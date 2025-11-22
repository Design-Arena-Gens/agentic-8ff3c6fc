'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isCamera, setIsCamera] = useState(false)

  const handleClick = () => {
    setIsCamera(!isCamera)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Click to Transform</h1>
        <div
          className={`${styles.animation} ${isCamera ? styles.camera : styles.logo}`}
          onClick={handleClick}
        >
          {!isCamera ? (
            <div className={styles.canonLogo}>
              <svg viewBox="0 0 400 150" className={styles.logoSvg}>
                {/* Canon Logo Text */}
                <text x="200" y="90" className={styles.logoText}>Canon</text>
              </svg>
            </div>
          ) : (
            <div className={styles.cameraBody}>
              {/* Camera Body */}
              <div className={styles.cameraMain}>
                {/* Lens */}
                <div className={styles.lens}>
                  <div className={styles.lensRing1}></div>
                  <div className={styles.lensRing2}></div>
                  <div className={styles.lensCenter}></div>
                </div>

                {/* Viewfinder */}
                <div className={styles.viewfinder}></div>

                {/* Flash */}
                <div className={styles.flash}></div>

                {/* Shutter Button */}
                <div className={styles.shutterButton}></div>

                {/* Canon Badge */}
                <div className={styles.badge}>Canon</div>

                {/* Grip */}
                <div className={styles.grip}>
                  <div className={styles.gripLine}></div>
                  <div className={styles.gripLine}></div>
                  <div className={styles.gripLine}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className={styles.instruction}>
          {isCamera ? 'Click to see logo' : 'Click to see camera'}
        </p>
      </div>
    </main>
  )
}
