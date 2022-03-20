import styles from "../styles/history.module.scss";
import historyTableColumns from "../constants/historyTableColumns";
import DataTable from "ui/components/table";
import getHistory from "../model/getHistory";
import useObservable from "utils/hooks/useObservable";

export default function History() {
  const [history, _] = useObservable(getHistory);
  return (
    <main className={styles.history}>
      <h1>Shopping history</h1>
      {history && <DataTable columns={historyTableColumns} data={history} />}
    </main>
  );
}
