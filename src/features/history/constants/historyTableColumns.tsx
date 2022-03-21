import { ColumnType } from "ui/components/table";
import formatDate from "utils/helpers/formatDate";
import { PurchasedItem } from "../model/schema";

const historyTableColumns: ColumnType<PurchasedItem>[] = [
  {
    title: "Product",
    dataIndex: "name",
    form: (setFilter) => (
      <input
        placeholder="Filter by name"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    ),
  },
  {
    title: "Date of purchase",
    dataIndex: "purchaseDate",
    render: (data) => formatDate(data.purchaseDate),
    form: (setFilter) => (
      <input
        placeholder="Filter by date"
        type="date"
        style={{ opacity: 0.6 }}
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
    render: (data) => (
      <a
        href={data.link}
        rel="noreferrer"
        style={{ textDecoration: "underline" }}
        target="_blank"
      >
        {data.store}
      </a>
    ),
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
