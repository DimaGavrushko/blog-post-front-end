import { monthNames } from "../constants";

export const toPostDate = dateString => {
  const completeToDoubleDigit = text => {
    if (text.length === 1) {
      text = "0" + text;
    }

    return text;
  };

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = completeToDoubleDigit(date.getDate());

  return `${day} ${month},${year}`;
};

export const getPostDescription = text => {
  const subText = text.substring(0, 200);
  return subText.substring(0, subText.lastIndexOf(".") + 1 || subText.length);
};

export const getPostShortName = text => {
  let name;
  if (text.length > 50) {
    name = text.substring(0, 50);
    name = name.substring(0, name.lastIndexOf(" ") + 1);
    return name + "...";
  }

  return text;
};
