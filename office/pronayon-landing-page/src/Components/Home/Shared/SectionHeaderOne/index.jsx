import styles from './SectionHeaderOne.module.css'
export default ({title}) => {
    return (
      <>
        <h1 className={styles.header}>{title}</h1>
      </>
    );
  };