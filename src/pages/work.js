import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Style = styled.div`
  a {
    color: ${(props) => props.theme.colors.pink};
    &:hover {
      color: #ff73a9;
    }
    text-decoration: none;
  }
`;

const WorkPage = () => (
  <Layout>
    <SEO title="work" />
    <Style>
      <p>
        <a href="https://dreamstage.live">
          <strong>Dreamstage</strong>
        </a>{" "}
        is revolutionizing the live concert experience with high fidelity audio
        and video streaming, directly to your device. We broadcast performances
        of all genres live and on demand, allowing fans across the world to
        interact with and enjoy their favorite acts.
      </p>

      <p>
        <a href="https://populist.us">
          <strong>Populist</strong>
        </a>{" "}
        is an ambitious project that is working to connect people to their
        local, state, and federal governments. We are driving civic engagement
        and working to enable a more modern and just democracy for voters,
        organizations, and politicians.
      </p>

      <p>
        <a href="https://lunchbox.fm">
          <strong>Lunchbox.fm</strong>
        </a>{" "}
        is my personal internet radio statio, featuring a hand curated selection
        of music and complete with a choose your own theme adventure.
      </p>

      <p>
        <a href="https://studioartsboulder.org">
          <strong>Studio Arts Boulder</strong>
        </a>{" "}
        runs the Pottery Lab, a community art studio where I volunteer based in
        Boulder, Colorado. Our major focus is education and the advancedment of
        the studio arts.
      </p>

      <p>
        <a href="https://apps.apple.com/us/app/gap-timer/id1530987670">
          <strong>Gap Timer</strong>
        </a>{" "}
        is a simple yet powerful iOS app for high intensity interval training. I
        wasn't happy with existing interval timers available on the App Store,
        so I built my own.
      </p>

      {/* <hr />
      <p>
        <a href="https://legalpad.io">
          <strong>Legalpad</strong>
        </a>{" "}
        is streamlining the immigration process for global talent with
        sophisticated petition building software. We have helped hundreds of
        startups tackle the nuanced and stubborn processes behind US work visas.
      </p> */}
    </Style>
  </Layout>
);

export default WorkPage;
