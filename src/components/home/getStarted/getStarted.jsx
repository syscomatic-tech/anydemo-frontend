import styles from '../../../styles/pages/get-started.module.css'

export default function GetStarted() {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getStarted__container}>
        <div className={styles.getStarted__container__text}>
          <h1>Get started</h1>
          <p>Join the growing list of creatives who get
            their visions heard today</p>
          <span>Explore now</span>
        </div>
      </div>
    </div>
  )
}