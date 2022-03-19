import styles from "../styles/history.module.css";
import historyTableColumns from "../constants/historyTableColumns";
import DataTable from "ui/components/table";
import { ShoppingItem } from "../model/types";

export default function History(props: { history: ShoppingItem[] }) {
  return (
    <main className={styles.history}>
      {props.history && (
        <DataTable columns={historyTableColumns} data={props.history} />
      )}
    </main>
  );
}
