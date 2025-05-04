
import React, { useState, useEffect } from "react";
// API

import "./list.scss";
import service from "../../services/mockapi";


// components:
        import AddNewUser from "./AddNewUser";
        import RenderList from "./RenderList";
        import Filter from './Filter'

export default function List() {
  const [data, setData] = useState([]);
  const [filterEl, setFilterEl] = useState({
    name: true,
    username: true,
    email: true,
    married: true,
  });


  const getApi = async () => {
    try {
      const response = await service.get("users");
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
    console.log(data);
  }, []);

  return data.length ? (
    <>
      <AddNewUser  getApi={getApi} />
      <RenderList data={data} filterEl={filterEl}  getApi={getApi}/>
      <Filter filterEl={filterEl} setFilterEl={setFilterEl} />

    </>
  ) : null;
}
