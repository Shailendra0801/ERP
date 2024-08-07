import React, { useEffect } from "react";
import Body from "./Body";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import { useDispatch } from "react-redux";
import { getAllDepartment } from "../../../../redux/actions/adminActions";

const Update = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return (
    <div className="bg-gray-900 h-screen FLEX">
      <div className="flex flex-col  bg-[#f4f6fa] h-[95%] w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95] overflow-y-scroll">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Update;
