import React from "react";
import styled from "styled-components";
import Doodle from "../components/doodle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="thank you" />

    <h1 style={{ textAlign: "center", margin: "9rem 0" }}>
      Thank you for your purchase! I hope it brings you joy.
    </h1>
  </Layout>
);

export default IndexPage;
