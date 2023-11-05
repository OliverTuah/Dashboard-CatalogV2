import React from "react";
import Navbar from "@/Component/Navbar";
import { useState } from "react";
import Dashboard from "./Apps/Dashboard";
import Product from "./Apps/Product";
import Order from "./Apps/Order";
import { Flex } from "@chakra-ui/react";

function index() {
  const [component, setComponent] = useState("button1");

  const toggleButton = (componentKey) => {
    setComponent(componentKey);
  };

  return (
    <>
      <></>
      <Flex direction={"row"} gap={"50px"}>
        <Navbar stateComponent={toggleButton} />
        {component == "button1" ? (
          <Dashboard />
        ) : component == "button2" ? (
          <Product />
        ) : component == "button3" ? (
          <Order />
        ) : component == "button4" ? (
          <Product />
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
}

export default index;
