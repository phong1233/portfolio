import { forwardRef, RefObject } from 'react';
import styles from './ContactBlock.module.scss';

export interface AboutBlockProps {
  ref: RefObject<HTMLDivElement>;
}

const ContactBlock = forwardRef<HTMLDivElement, AboutBlockProps>((props, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.titleContainer}>
        <div className={styles.text}>Contact</div>
        <a
          href={'https://www.linkedin.com/in/phong-le-04/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="linkedin icon" />
        </a>
        <a href={'https://github.com/phong1233'} target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="github icon" />
        </a>
        <a
          href={
            'https://devpost.com/phongle?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/devpost.svg" alt="devpost icon" />
        </a>
        <a href={'https://phong-le.medium.com/'} target="_blank" rel="noopener noreferrer">
          <img src="/icons/medium.png" alt="medium icon" />
        </a>
      </div>
    </div>
  );
});

ContactBlock.displayName = 'ContactBlock';

export default ContactBlock;
