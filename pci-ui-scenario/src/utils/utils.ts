import { RowDataResponse } from "../types/types";

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

export const formatData = (data: RowDataResponse[]) =>
  data.map((item) => ({
    designation: item.designation,
    discovery_date: parseDate(item.discovery_date),
    h_mag: parseNumber(item.h_mag),
    moid_au: parseNumber(item.moid_au),
    q_au_1: parseNumber(item.q_au_1),
    q_au_2: parseNumber(item.q_au_2),
    period_yr: parseNumber(item.period_yr),
    i_deg: parseNumber(item.i_deg),
    pha: formatPHA(item.pha),
    orbit_class: item.orbit_class,
  }));
