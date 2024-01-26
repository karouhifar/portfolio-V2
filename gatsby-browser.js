import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
