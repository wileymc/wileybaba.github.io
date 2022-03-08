import React from "react";
import Doodle from "../components/doodle";
import Layout from "../components/layout";

export default function PhrontisteryPage() {
  return (
    <Layout noHeader noFooter>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Doodle width={"50vmax"} />
      </div>
    </Layout>
  );
}
