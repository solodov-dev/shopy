import styles from "../styles/history.module.css";
import Button from "ui/components/button";

export default function History(props: { history: any }) {
  return (
    <main className={styles.history}>
      History
      <Button>Click</Button>
      <p>{JSON.stringify(props.history)}</p>
    </main>
  );
}
