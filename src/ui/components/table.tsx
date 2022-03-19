import React, { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import objectKeys from "utils/helpers/objectKeys";

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
    <table>
      <DataHeader columns={props.columns} setFilter={setFilter} />
      <Body columns={props.columns} data={props.data} filter={filter} />
    </table>
  );
}

function filterData<T>(data: T, filter: TableFilter<T>) {
  const filterKeys = objectKeys(filter);
  for (const key of filterKeys) {
    if (typeof data[key] === "string") {
      if (!new RegExp(filter[key], "i").test(data[key] as unknown as string)) {
        return;
      }
    }
  }
  return data;
}

function Body<T>(props: {
  data: T[];
  columns: ColumnType<T>[];
  filter: TableFilter<T>;
}) {
  return (
    <tbody>
      {props.data
        .filter((value) => filterData(value, props.filter))
        .map((dataItem, index) => (
          <tr key={index}>
            {props.columns.map((col, index) => (
              <td>
                {col.render ? col.render(dataItem) : dataItem[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
}

function DataHeader<T>(props: {
  columns: ColumnType<T>[];
  setFilter: Dispatch<SetStateAction<TableFilter<T>>>;
}) {
  return (
    <thead>
      <tr key="tr">
        {props.columns.map((col) => (
          <th key={col.title}>
            <div>
              {col.title}
              {col.form?.(props.setFilter)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
