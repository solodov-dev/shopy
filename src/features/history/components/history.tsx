import historyTableColumns from "../constants/historyTableColumns";
import DataTable from "ui/components/table";
import getHistory from "../model/getHistory";
import useObservable from "utils/hooks/useObservable";
import PageLayout from "ui/layouts/pageLayout";
import Loader from "ui/components/loader";

export default function History() {
  const history = useObservable(getHistory);

  if (!history) return <Loader/>

  return (
    <PageLayout>
      <h1>Shopping history</h1>
      <DataTable columns={historyTableColumns} data={history} />
    </PageLayout>
  );
}
