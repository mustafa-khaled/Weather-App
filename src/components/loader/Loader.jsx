import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className="container mx-auto mt-[20px] flex min-h-[calc(100vh-90px)] items-center justify-center px-[10px]">
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
