import React, { useState } from "react";
import { Button } from "./Button";
import { FaLightbulb } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { apiGetActivity } from "../api";

const buttonsList = [
  { id: 1, title: "All on", color: "yellow" },
  { id: 2, title: "Normal", color: "white" },
  { id: 3, title: "Off", color: "black" },
];

export const Buttons = () => {
  const [data, setData] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const onClickHandler = async (id) => {
    setActiveButton(id);
    try {
      const response = await apiGetActivity();

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.activity);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="buttons-container">
        {buttonsList.map((item) => {
          return (
            <Button
              key={item.id}
              id={item.id}
              text={item.title}
              color={item.color}
              isActive={activeButton === item.id}
              onClickHandler={onClickHandler}
            >
              <IconContext.Provider value={{ color: item.color, size: "70px" }}>
                <div>
                  <FaLightbulb />
                </div>
              </IconContext.Provider>
            </Button>
          );
        })}
      </div>
      {data && <div className="data">{data}</div>}
    </div>
  );
};