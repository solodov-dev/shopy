import styles from "../styles/history.module.css";
import historyTableColumns from "../constants/historyTableColumns";
import DataTable from "ui/components/table";

export default function History(props: { history: any }) {
  return (
    <main className={styles.history}>
      <DataTable columns={historyTableColumns} data={props.history} />
    </main>
  );
}
