import styles from './TitleBlock.module.scss'


export interface TitleBlockProps {
}
  
const TitleBlock = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Hello, I'm Phong
        </div>
        <div className={styles.subtitle}>
          Future Software Engineer
        </div>
      </div>
      <div className={styles.divider1}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.fill}></path>
        </svg>
      </div>
    </div>
  );
}

export default TitleBlock