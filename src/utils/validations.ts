import moment from "moment";

export const validatePayloads = (payloads: any) => {
  if (!payloads?.data) {
    return 0;
  }
  const { amount, description, category, paymentType } = payloads?.data;
  if (amount != 0 && description != "" && category != "" && paymentType != "") {
    return 1;
  } else {
    return 0;
  }
};

export const convert = (arr: any) => {
  let ls: any = [];
  arr.map((str: any) => {
    let datee = new Date(`${moment(str).format("YYYY MM DD HH:MM")} UTC`);
    ls.push(datee.toISOString());
  });
  return ls;
};
