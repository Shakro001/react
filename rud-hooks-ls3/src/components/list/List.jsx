import React, { useState, useEffect } from "react";
import "./list.scss";

const API = `https://jsonplaceholder.typicode.com/users`;

export default function List({}) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({});

  const getData = async () => {
    try {
      const request = await fetch(API);
      const response = await request.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const deleteElement = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
        method: "DELETE",
      });

      setData((prevState) => prevState.filter((el) => el.id !== item.id));
    } catch (error) {
      console.log(error);
    }
  };

  const editElement = async (item) => {
    const newName = inputValue[item.id];

    if (newName !== "") {
      console.log("new name: ", newName);
      try {
        const request = await fetch(API + `/${item.id}`, {
          method: "PATCH",
          body: JSON.stringify({ name: newName }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await request.json();

        setData((prevState) =>
          prevState.map((el) => {
            if (el.id === response.id) el = response;
            return el;
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("no valid name");
    }
  };

  return data.length ? (
    <div className="user">
      {data.map((el) => (
        <div className="user__cards" key={el.id}>
          <h3 className="user__title">user num {el.id}</h3>
          <ul className="user__card">
            {Object.entries(el).map(([key, value]) => {
              return (
                <li key={key}>
                  {key}:
                  {typeof value === "object" ? (
                    <ul>
                      {Object.entries(value).map(([key, value]) => (
                        <li key={key}>
                          {key}:
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : value}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    value
                  )}
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              deleteElement(el);
            }}
            className="user__remove-button"
          >
            DELETE DATA EL
          </button>

          <div className="user__input-box">
            <input
              type="text"
              onChange={(e) =>
                setInputValue((prevState) => ({
                  ...prevState,
                  [el.id]: e.target.value,
                }))
              }
            />
            <button onClick={() => editElement(el)}>edit name</button>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
