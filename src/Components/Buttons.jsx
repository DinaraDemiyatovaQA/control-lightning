import React, { useState } from "react";
import { Button } from "./Button";
import { FaLightbulb } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { apiLightingControl } from "../api";

const buttonsList = [
  { id: 1, title: "All on", color: "yellow" },
  { id: 2, title: "Normal", color: "white" },
  { id: 3, title: "Off", color: "black" },
];

export const Buttons = () => {
  const [activeButton, setActiveButton] = useState("");
  const [status, setStatus] = useState("");

  const onClickHandler = async (id) => {
    setActiveButton(id);

    try {
      // const response = await fetch("/test", {});
      const response = await apiLightingControl();
      setActiveButton("");
      console.log("onClickHandler", response);
      if (!response.ok) {
        setStatus(response.status);
        console.log("onClickHandler", response.status);
      } else {
        setStatus("Success!");
        console.log("onClickHandler: Success", response.status);
      }
    } catch (err) {
      setStatus(err.message);
      console.log("onClickHandler", err);
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="container">
      <div className="status-container">{status && <h2>{status}</h2>}</div>
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
    </div>
  );
};
