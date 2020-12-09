import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card, Tag } from '../components/base';
import Swirly01 from '../videos/swirly01.mp4';
import YouTube from '../components/YouTube';
import Video from '../components/video';
import Checkout from '../components/checkout';

const CardGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(8rem, 100%));
  grid-gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
`;

export default function ArtPage() {
  const artImages = useStaticQuery(graphql`
    query {
      goaMural: file(relativePath: { eq: "art/goa_mural.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      spaceMonkey: file(relativePath: { eq: "art/space_monkey.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bipolarBiped: file(relativePath: { eq: "art/bipolar_depression.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      glitchArt: file(relativePath: { eq: "art/glitch_art.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="art" />
      <CardGrid>
        <Card className="art">
          <Img
            fluid={artImages.goaMural.childImageSharp.fluid}
            alt="mural image"
            style={{ width: 'auto' }}
          />
          <div>
            <h1>Collaborative mural in Anjuna</h1>
            <h2>Red Door Hostel - Goa, India</h2>
          </div>
        </Card>
        <Card className="art">
          <Video
            source={Swirly01}
            showControls={false}
            filter="brightness(160%)"
          />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <h1>Tripple Handle Swirly</h1>
              <Checkout priceId="price_1HwKuYHNkflIFOEUjYUPvbcz">
                FOR SALE
              </Checkout>
            </div>
            <h2>Red and white stoneware</h2>
          </div>
        </Card>
        <Card className="art">
          <Img
            fluid={artImages.spaceMonkey.childImageSharp.fluid}
            alt="space moneky image"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
          <div>
            <h1>Space Monkey</h1>
            <h2>Ink and watercolor on paper</h2>
          </div>
        </Card>
        <Card className="art">
          <Img
            fluid={artImages.bipolarBiped.childImageSharp.fluid}
            alt="bipolar image"
            style={{ width: 'auto', filter: 'contrast(160%)' }}
          />
          <div>
            <h1>Bipolar Biped</h1>
            <h2>Marker on paper</h2>
          </div>
        </Card>
        <Card className="art">
          <Img
            fluid={artImages.glitchArt.childImageSharp.fluid}
            alt="glitchart image"
            style={{ width: 'auto', filter: 'contrast(160%)' }}
          />
          <div>
            <h1>Glitch Art</h1>
            <h2>
              Created with <a href="https://glitchart.io/">glitchart.io</a>
            </h2>
          </div>
        </Card>
      </CardGrid>
    </Layout>
  );
}
