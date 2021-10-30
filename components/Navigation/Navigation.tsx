import { RefObject } from 'react';
import styles from './Navigation.module.scss';
import useScrollPosition from './useScrollPosition';

export interface NavigationProps {
  refs: {
    name: string;
    ref: RefObject<HTMLElement>;
  }[];
}

const Navigation = ({ refs }: NavigationProps) => {
  const scrollPosition = useScrollPosition();

  const executeScroll = (r: RefObject<HTMLElement>) => {
    if(r.current) r.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  const isInPosition = (r: RefObject<HTMLElement>) => {
    let window = r.current?.getBoundingClientRect();
    if (!window) return false;
    let top = window?.top == null ? 0 : window?.top;
    let bottom = window?.bottom == null ? 0 : window?.bottom;
    return top >= -(bottom - top) && top <= Number(scrollPosition)/2;
  };

  return (
    <div className={styles.container}>
      {refs.map(r => (
        <div
          key={r.name}
          className={isInPosition(r.ref) ? styles.sectionSelected : styles.section}
          onClick={() => executeScroll(r.ref)}
        >
          {isInPosition(r.ref) ? (
            <img src="/icons/heart.svg" alt="heart" height={'60%'} />
          ) : (
            <img src="/icons/heart-black.svg" alt="heart" height={'60%'} />
          )}
          <div className={styles.textBox}>{r.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
