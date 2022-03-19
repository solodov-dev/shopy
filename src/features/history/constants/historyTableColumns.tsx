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
    render: (data) => data.purchaseDate.toLocaleDateString(),
    form: (setFilter) => (
      <input
        placeholder="Filter by date"
        type="date"
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
    render: (data) => <a href={data.store}>{data.store}</a>,
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
