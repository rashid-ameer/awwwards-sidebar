import styles from "./style.module.scss";

type ButtonProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

function Button({ active, setActive }: ButtonProps) {
  return (
    <div
      onClick={() => setActive(!active)}
      className={`${styles.button} ${active ? styles.transform : ""}`}>
      <div className={styles.wrapper}>
        <PerspectiveText label="Open" />
      </div>
      <div className={styles.wrapper}>
        <PerspectiveText label="Close" />
      </div>
    </div>
  );
}
export default Button;

type PerspectiveTextProps = {
  label: string;
};

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
