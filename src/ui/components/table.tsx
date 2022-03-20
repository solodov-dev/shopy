import React, { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import datesAreEqual from "utils/helpers/datesAreEqual";
import objectKeys from "utils/helpers/objectKeys";
import isDate from "utils/typeGuards/isDate";
import isString from "utils/typeGuards/isString";
import styles from "../styles/table.module.css";

export type ColumnType<T> = {
  title: string;
  dataIndex: keyof T;
  render?: (data: T) => ReactNode;
  form?: (setFilter: Dispatch<SetStateAction<TableFilter<T>>>) => ReactNode;
};

type TableFilter<T> = Partial<Record<keyof T, any>>;

export default function DataTable<T>(props: {
  data: T[];
  columns: ColumnType<T>[];
}) {
  const [filter, setFilter] = useState<TableFilter<T>>({});

  return (
    <table className={styles.table}>
      <thead>
        <tr key="tr">
          {props.columns.map((col) => (
            <th key={col.title}>
              <div className={styles.header}>
                {col.title}
                {col.form?.(setFilter)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data
          .filter((value) => filterTable(value, filter))
          .map((dataItem, index) => (
            <tr key={index}>
              {props.columns.map((col) => (
                <td key={col.title}>
                  {col.render ? col.render(dataItem) : dataItem[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}


function filterTable<T>(rowData: T, tableFilter: TableFilter<T>) {
  for (const key of objectKeys(tableFilter)) {
    const filter = tableFilter[key];
    const value = rowData[key];
    if (filter) {
      if (isString(value) && !new RegExp(filter, "i").test(value)) return; 
      if (isDate(value) && isDate(filter) && !datesAreEqual(value, filter)) return;
    }
  }
  return rowData;
}

