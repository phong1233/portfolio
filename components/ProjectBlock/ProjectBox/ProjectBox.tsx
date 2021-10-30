import styles from './ProjectBox.module.scss';


export interface ProjectBoxProps {
  name: string;
  image: string;
  tools: string;
  description: string;
  github?: string;
  devpost?: string;
}

const ProjectBox = ({name, image, tools, description, github, devpost}: ProjectBoxProps) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="image of the project"/>
      <div className={styles.description}>
        <b>{name}</b> | <small>{tools}</small><br/>
        <p>
          {description}
        </p>
      </div>
      <div className={styles.iconBox}>
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><img src="/icons/github.svg" alt="github icon"/></a>}
        {devpost && <a href={devpost} target="_blank" rel="noopener noreferrer"><img src="/icons/devpost.svg" alt="devpost icon"/></a>}
      </div>
    </div>
  );
}

ProjectBox.displayName = 'ProjectBox';

export default ProjectBox;