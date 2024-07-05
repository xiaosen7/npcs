import numeral from "numeral";

export function formatTimeBySeconds(value: number) {
  return numeral(value).format("00:00:00");
}
