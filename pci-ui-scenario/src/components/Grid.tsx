import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { GridApi } from "ag-grid-community";
import rawData from "../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../global.css";
import { formatData } from "../utils/utils";
import { RowDataResponse } from "../types/types";
import { columnDefs, defaultColDef } from "./gridConfig";
import TitleBar from "./TitleBar";

const NeoGrid = (): JSX.Element => {
  const formattedData = formatData(rawData as RowDataResponse[]);
  const gridApiRef = useRef<GridApi | null>(null);

  const onGridReady = (params: { api: GridApi }) => {
    gridApiRef.current = params.api;
  };

  const clearFiltersAndSorters = () => {
    if (gridApiRef.current) {
      gridApiRef.current.setFilterModel(null);
      gridApiRef.current.applyColumnState({ defaultState: { sort: null } });
    }
  };

  return (
    <div className="app-container">
      <TitleBar onClear={clearFiltersAndSorters} />
      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          rowData={formattedData}
          columnDefs={columnDefs}
          rowGroupPanelShow="always"
          defaultColDef={defaultColDef}
          enableCellTextSelection={true}
          cellSelection={true} // this enable to select, copy and past but it works with the Premium version
          onGridReady={onGridReady}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default NeoGrid;
