import React from "react";
import { Line, Pie } from "@ant-design/charts";
import "./styles.css"; // Import CSS file

function ChartComponent({ sortedTransactions }) {
  const data = sortedTransactions.map((item) => ({
    date: item.date,
    amount: item.amount,
  }));

  const spendingData = sortedTransactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const finalSpending = spendingData.reduce((acc, obj) => {
    let key = obj.tag;
    let found = acc.find((item) => item.tag === key);
    if (!found) {
      acc.push({ tag: key, amount: obj.amount });
    } else {
      found.amount += obj.amount;
    }
    return acc;
  }, []);

  const lineConfig = {
    data: data,
    width: 300,
    height: 300,
    autoFit: true,
    xField: "date",
    yField: "amount",
    point: {
      size: 5,
      shape: "diamond",
    },
    tooltip: {
      formatter: (datum) => ({
        name: datum.date,
        value: datum.amount,
      }),
    },
  };

  const pieConfig = {
    data: finalSpending,
    width: 350,
    height: 300,
    autoFit: true,
    angleField: "amount",
    colorField: "tag",
    radius: 1,
  };

  return (
    <div className="charts-wrapper">
      <div className="chart-container line-chart-container">
        <h2 className="chart-title">Your Analytics</h2>
        <Line {...lineConfig} />
      </div>
      <div className="chart-container pie-chart-container">
        <h2 className="chart-title">Your Spendings</h2>
        <Pie {...pieConfig} />
      </div>
    </div>
  );

}

export default ChartComponent;

