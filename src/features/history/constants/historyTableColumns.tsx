import { ColumnType } from "ui/components/table";
import { ShoppingItem } from "../model/types";

const historyTableColumns: ColumnType<ShoppingItem>[] = [
  {
    title: "Product",
    dataIndex: "product",
    form: (setFilter) => (
      <input
        placeholder="Filter by name"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, product: e.target.value }))
        }
      />
    ),
  },
  {
    title: "Date of purchase",
    dataIndex: "purchaseDate",
    render: (data) => data.purchaseDate.toLocaleDateString('en-GB', {weekday: 'long', month: 'long', year: 'numeric', day: '2-digit', hour: 'numeric', minute: 'numeric'}),
    form: (setFilter) => (
      <input
        placeholder="Filter by date"
        type="date"
        style={{opacity: 0.6}}
        onChange={(e) =>
          setFilter((prev) => ({
            ...prev,
            purchaseDate: e.target.value ? new Date(e.target.value) : "",
          }))
        }
      />
    ),
  },
  {
    title: "Store",
    dataIndex: "store",
    render: (data) => <a href={data.link} rel="noreferrer" style={{textDecoration: 'underline'}} target="_blank">{data.store}</a>,
    form: (setFilter) => (
      <input
        placeholder="Filter by shop name"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, store: e.target.value }))
        }
      />
    ),
  },
];

export default historyTableColumns;
