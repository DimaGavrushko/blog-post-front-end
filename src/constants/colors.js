export const primaryColor = ["#0091e5", "#00b7e5"];

export const grayColor = [
  "#999",
  "#edeff2",
  "#dadada",
  "#a3a5a8",
  "#e1e3e6",
  "#5e5e5e",
  "#e2e2e2",
  "#fcfcfc"
];

export const whiteColor = "#ffffff";

export const dangerColor = "#ff0000";

export const redColor = "#ff6347";

export const greenColor = "#34BB62";

export const blackColor = "#000000";

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `
    ${parseInt(result[1], 16)},
    ${parseInt(result[2], 16)},
    ${parseInt(result[3], 16)}
  `
    : "";
}
