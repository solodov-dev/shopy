import historyTableColumns from "../constants/historyTableColumns";
import DataTable from "ui/components/table";
import PageLayout from "ui/layouts/pageLayout";
import Loader from "ui/components/loader";
import { PurchasedItem } from "../model/schema";

export default function History(props: { history?: PurchasedItem[] }) {
  if (!props.history) return <Loader />;

  return (
    <PageLayout>
      <h1>Shopping history</h1>
      <DataTable columns={historyTableColumns} data={props.history} />
    </PageLayout>
  );
}
