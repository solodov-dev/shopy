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
    form: () => <input placeholder="Filter by date" type="date" />,
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
