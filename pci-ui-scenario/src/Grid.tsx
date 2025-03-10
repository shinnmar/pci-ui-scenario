import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import rawData from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AppEnums } from "./enums/App.enums";

const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

const parseNumber = (value: string): number | null => {
  const num = Number(value);
  return isNaN(num) ? null : num;
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
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    filter: "agTextColumnFilter",
    enableRowGroup: true,
  },
];

const NeoGrid = (): JSX.Element => {
  const formattedData = formatData(rawData);

  return (
    <>
      <h1>{AppEnums.TITLE_PAGE}</h1>
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
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
        />
      </div>
    </>
  );
};

export default NeoGrid;
