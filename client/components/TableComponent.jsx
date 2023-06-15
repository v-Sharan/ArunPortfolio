import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";

import React from "react";

import Header from "./Header";

const TableComponent = ({
  columns,
  row,
  isLoading,
  category,
  title,
  maxHeight,
}) => {
  return (
    <Paper sx={{ width: "85%", height: "100%", overflow: "hidden", margin: 5 }}>
      <Header category={category} title={title} />
      <TableContainer sx={{ maxHeight: maxHeight ? maxHeight : 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {row && (
            <TableBody>
              {row?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {isLoading && (
        <div className="flex justify-center my-4">
          <CircularProgress />
        </div>
      )}
    </Paper>
  );
};

export default TableComponent;
