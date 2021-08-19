import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card } from '../components/base';
import Swirly01 from '../videos/swirly01.mp4';
import SpiceLamp from '../videos/spicelamp.mp4';
import SpaceChicken from '../videos/spacechicken.mp4';
import Video from '../components/video';
import Checkout from '../components/checkout';

const CardGrid = styled.main`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  grid-template-rows: masonry;
  align-content: start;
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

      continentalDivide: file(
        relativePath: { eq: "art/continental_divide.jpg" }
      ) {
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

  console.log(artImages);

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

        <Card
          className="art"
          as={Link}
          to="/art/spice-lamp"
          style={{ textDecoration: 'inherit' }}
        >
          <Video source={SpiceLamp} showControls={false} />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <h1>Spice Lamp</h1>
              <Checkout priceId="price_1IC7YjHNkflIFOEU7frfgptk">
                FOR SALE
              </Checkout>
            </div>
            <h2>Red and white stoneware with black stain</h2>
          </div>
        </Card>

        <Card
          className="art"
          as={Link}
          to="/art/space-chicken"
          style={{ textDecoration: 'inherit' }}
        >
          <Video
            source={SpaceChicken}
            showControls={false}
            filter="brightness(115%)"
          />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <h1>Space Chicken</h1>
              <Checkout priceId="price_1IC7c0HNkflIFOEUazBVWZsu">
                FOR SALE
              </Checkout>
            </div>
            <h2>Red and white stoneware with black stain</h2>
          </div>
        </Card>

        <Card className="art">
          <Img
            fluid={artImages.spaceMonkey.childImageSharp.fluid}
            alt="space monkey image"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
          <div>
            <h1>Space Monkey</h1>
            <h2>Ink and watercolor on paper</h2>
          </div>
        </Card>
        <Card className="art">
          <Img
            fluid={artImages.continentalDivide.childImageSharp.fluid}
            alt="continental divide"
            style={{ width: 'auto', objectFit: 'cover' }}
          />
          <div>
            <h1>Continental Divide</h1>
            <h2>Acrylic on Canvas</h2>
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
