import React, { useState } from "react";
import WidgetsOnPage from "../../Components/WidgetsOnPage";
import AddSection from "./Widgets/AddSection";
import AddNewEntry from "./Widgets/AddNewEntry";
import TotalOfAllSection from "./Widgets/TotalOfAllSection";
import AllExpenseSections from "./Widgets/AllExpenseSections/AllExpenseSections";

const Expense = () => {
  const allSections = ["pocket", "bank"];
  const allData = {
    pocket: [
      {
        month: "01-2023",
        entries: [
          {
            date: "01-01-2023",
            dailydebit: 400,
            dailyCredit: 800,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
          {
            date: "02-01-2023",
            dailydebit: 500,
            dailyCredit: 300,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
        ],
      },
      {
        month: "02-2023",
        entries: [
          {
            date: "01-01-2023",
            dailydebit: 400,
            dailyCredit: 200,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
          {
            date: "02-01-2023",
            dailydebit: 400,
            dailyCredit: 300,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
        ],
      },
    ],
    bank: [
      {
        month: "01-2023",
        entries: [
          {
            date: "01-01-2023",
            dailydebit: 400,
            dailyCredit: 300,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
          {
            date: "02-01-2023",
            dailydebit: 400,
            dailyCredit: 300,
            entries: [
              { comment: "comment1", value: -20 },
              { comment: "comment2", value: 40 },
            ],
          },
        ],
      },
    ],
  };
  const [data, setData] = useState(allData);
  const [refresh, setRefresh] = useState(true);
  return (
    <>
      <WidgetsOnPage
        title={"Expense DashBoard"}
        leftComponent={
          <>
            <AddNewEntry
              data={data}
              allSections={allSections}
              refresh={refresh}
              setRefresh={setRefresh}
            />
            <AddSection
              allSections={allSections}
              data={data}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </>
        }
        rightComponent={
          <>
            <TotalOfAllSection
              debit={data.overalDebit}
              credit={data.overalCredit}
            />
            <AllExpenseSections data={data} />
          </>
        }
      />
      {/* <CollapsibleTable data={data} /> */}
    </>
  );
};

export default Expense;
