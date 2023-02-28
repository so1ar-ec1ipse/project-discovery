import React, { FC } from "react";
import {
  AutoSizer as _AutoSizer,
  Table as _Table,
  Column as _Column,
  AutoSizerProps,
  TableProps,
  ColumnProps,
} from "react-virtualized";

const Table = _Table as unknown as FC<TableProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;
const Column = _Column as unknown as FC<ColumnProps>;

interface Data {
  name: string;
  age: number;
  address: string;
}

const MyTable = ({ data }: { data: Data[] }) => {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          width={width}
          height={height}
          headerHeight={20}
          rowHeight={30}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
        >
          <Column label="Name" dataKey="name" width={200} />
          <Column label="Age" dataKey="age" width={100} />
          <Column label="Address" dataKey="address" width={300} />
        </Table>
      )}
    </AutoSizer>
  );
};

export default MyTable;
