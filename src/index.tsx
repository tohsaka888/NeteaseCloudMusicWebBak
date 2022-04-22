import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
import { Layout } from "antd";
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Router>
    <ChakraProvider>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </Router>
);

