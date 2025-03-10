import { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
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

export const defaultColDef: ColDef = {
  flex: 1,
  resizable: true,
  sortable: true,
  floatingFilter: true,
};