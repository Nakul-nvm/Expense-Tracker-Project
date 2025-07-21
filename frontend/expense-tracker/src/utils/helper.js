// import moment, { months } from "moment";
import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num === null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  // console.log("Data inside prepareExpenseBarChartData:", data);  // Log to inspect data

  const chartData = data.map((item) => {
    // console.log("Mapping item:", item);  // Log each item being mapped
    return {
      category: item?.category || "Unknown", // Ensure category exists
      amount: item?.amount || 0,  // Ensure amount exists
    };
  });

  // console.log("Chart Data:", chartData);  // Log the transformed data
  console.log("Final Chart Data before rendering:", chartData);
  return chartData;
};


export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.Date) - new Date(b.Date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};

// export const prepareExpenseBarChartData = (data = []) => {
//   if (!data) {
//     return [];
//   }

//   // This function now creates the 'month' key that your chart needs.
//   const chartData = data.map((item) => {
//     // Create a date object from the transaction's date property.
//     // Assuming your data item looks like: { date: '2025-07-16T...', category: 'Food', ... }
//     const date = new Date(item.date);
//     // Get the short month name (e.g., "Jul")
//     const month = date.toLocaleString('default', { month: 'short' });
//     return {
//       month: month,             // The X-axis label (e.g., "Jul")
//       category: item.category,  // Needed for the custom tooltip
//       amount: item.amount,      // The value for the bar's height
//     };
//   });

//   return chartData;
// };

// export const prepareExpenseBarChartData = (data = []) => {
//   if (!data) {
//     return [];
//   }

//   // This function now creates the 'month' key that your chart needs.
//   const chartData = data.map((item) => {
//     // Create a date object from the transaction's date property.
//     // Assuming your data item looks like: { date: '2025-07-16T...', category: 'Food', ... }
//     const date = new Date(item.date);
//     // Get the short month name (e.g., "Jul")
//     const month = date.toLocaleString("default", { month: "short" });
//     return {
//       month: month, // The X-axis label (e.g., "Jul")
//       category: item.category, // Needed for the custom tooltip
//       amount: item.amount, // The value for the bar's height
//     };
//   });

//   return chartData;
// };

//new
