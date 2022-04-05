import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function Graph() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "value", headerName: "Value", width: 150, editable: false },
  ];

  const rows = [
    { id: 1, value: 90 },
    { id: 2, value: 100 },
    { id: 3, value: 100 },
    { id: 4, value: 100 },
    { id: 5, value: 100 },
    { id: 6, value: 100 },
  ];
  return (
    <div sstyle={{ height: 400, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
export default Graph;
