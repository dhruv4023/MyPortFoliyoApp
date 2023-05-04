import React from "react";
import WidgetsOnPage from "../../Components/WidgetsOnPage";
import AddSection from "./Widgets/AddSection";
import AddNewEntry from "./Widgets/AddNewEntry";
import TotalOfAllSection from "./Widgets/TotalOfAllSection";
import AllExpenseSections from "./Widgets/AllExpenseSections/AllExpenseSections";
import CollapsibleTable from "../../Components/CollapsibleTable";

const Expense = () => {
  const data = [
    {
      AID: "AID",
      time: "time",
      status: "status",
      AllData: {
        Date: "date",
        "Contact Number": "contactNumber",
        Email: "email",
        Message: "message",
        Name: "name",
      },
    },
    {
      AID: "AID2",
      time: "time2",
      status: "status2",
      AllData: {
        Date: "date2",
        ContactNumber: "contactNumber2",
        Email: "email2",
        Message: "message2",
        Name: "name2",
      },
    },
  ];
  return (
    <>
      {/* <WidgetsOnPage
        title={"Expense DashBoard"}
        leftComponent={
          <>
            <AddNewEntry />
            <AddSection />
          </>
        }
        rightComponent={
          <>
            <TotalOfAllSection />
            <AllExpenseSections data={data} />
          </>
        }
      /> */}
      <CollapsibleTable data={data}/>
    </>
  );
};

export default Expense;
