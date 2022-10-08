import { GET, POST, PUT, DELETE } from "./axios";

export const dashBoardCards = [
  {
    name: "SPENT TODAY",
    expense: "NO OF EXPENSE",
  },
  {
    name: "THIS WEEK",
    expense: "NO OF EXPENSE",
  },
  {
    name: "THIS MONTH",
    expense: "NO OF EXPENSE",
  },
  {
    name: "THIS YEAR",
    expense: "NO OF EXPENSE",
  },
];

export const REPORTS_DIC = [
  { value: "category", label: "Category" },
  { value: "create_date", label: "Dates" },
  { value: "paymentType", label: "Payment Type" },
];

export const ALL_REPORTS = [
  [
    { value: "Food", label: "Food", type: "category" },
    { value: "Travel", label: "Travel", type: "category" },
    { value: "Shopping", label: "Shopping", type: "category" },
    { value: "Necessities", label: "Necessities", type: "category" },
    { value: "Entertainment", label: "Entertainment", type: "category" },
    { value: "Others", label: "Others" },
  ],
  [
    { value: "Online", label: "Online", type: "paymentType" },
    { value: "Cash", label: "Cash", type: "paymentType" },
    { value: "Debit Card", label: "Debit Card", type: "paymentType" },
    { value: "Credit Card", label: "Credit Card", type: "paymentType" },
    { value: "Net Banking", label: "Net Banking", type: "paymentType" },
    { value: "Others", label: "Others", type: "paymentType" },
  ],
];

export const expensesDetails = async (dateTime: any) => {
  if (dateTime == "undefined") {
    dateTime = "None";
  }
  try {
    const response = await GET(
      `http://127.0.0.1:8008/expense-tracker-details/?dateTime=${dateTime}`
    );
    return response.data;
  } catch (erro) {
    return 0;
  }
};

export const updateExpence = async (payloads: any) => {
  try {
    const response = await POST(
      "http://127.0.0.1:8008/expense-tracker-details/",
      payloads
    );
    return response.data;
  } catch (error) {
    return 0;
  }
};

export const fetchDashBoardDetails = async () => {
  try {
    const response = await GET("http://127.0.0.1:8008/get-dash-board-details/");
    return response.data;
  } catch (error) {
    return 0;
  }
};

export const generateReportPDF = async () => {
  try {
    const response = await GET("http://127.0.0.1:8008/render-pdf-view/");
    return response.data;
  } catch (error) {
    return 0;
  }
};
