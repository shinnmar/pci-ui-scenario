import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi } from "ag-grid-community";
import rawData from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AppEnums } from "./enums/App.enums";
import "./global.css";

const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

const parseNumber = (value: string): number | null => {
  const num = Number(value);
  return isNaN(num) ? null : num;
};

const formatPHA = (value: string): string => {
  if (value === "Y") return "Yes";
  if (value === "N") return "No";
  return "";
};

const formatData = (data: any[]) =>
  data.map((item) => ({
    ...item,
    discovery_date: parseDate(item.discovery_date),
    h_mag: parseNumber(item.h_mag),
    moid_au: parseNumber(item.moid_au),
    q_au_1: parseNumber(item.q_au_1),
    q_au_2: parseNumber(item.q_au_2),
    period_yr: parseNumber(item.period_yr),
    i_deg: parseNumber(item.i_deg),
    pha: formatPHA(item.pha),
  }));

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    filter: "agTextColumnFilter",
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) =>
      params.value ? new Intl.DateTimeFormat("es-ES").format(params.value) : "",
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    filter: "agNumberColumnFilter",
    filterParams: { filterOptions: ["equals", "lessThan", "greaterThan"] },
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    filter: "agTextColumnFilter",
    valueFormatter: (params) => params.value ?? "",
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    filter: "agTextColumnFilter",
  },
];

const NeoGrid = (): JSX.Element => {
  const formattedData = formatData(rawData);
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
      <div className="title-container">
        <h1>{AppEnums.TITLE_PAGE}</h1>
        <button className="btn-filter" onClick={clearFiltersAndSorters}>
          Clear Filters and Sorters
        </button>
      </div>
      <div className="ag-theme-alpine grid-container">
        <AgGridReact
          rowData={formattedData}
          columnDefs={columnDefs}
          rowGroupPanelShow="always"
          defaultColDef={{
            flex: 1,
            resizable: true,
            sortable: true,
            floatingFilter: true,
          }}
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
