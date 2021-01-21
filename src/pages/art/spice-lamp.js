import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Card } from '../../components/base';
import Video from '../../components/video';
import SpiceLamp from '../../videos/spicelamp.mp4';

const CardGrid = styled.main`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  grid-template-rows: masonry;
  align-content: start;
`;

const IndexPage = () => {
  const spiceLampImages = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "art/spicelamp1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(relativePath: { eq: "art/spicelamp2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(relativePath: { eq: "art/spicelamp3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file(relativePath: { eq: "art/spicelamp4.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image5: file(relativePath: { eq: "art/spicelamp5.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image6: file(relativePath: { eq: "art/spicelamp6.jpg" }) {
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
      <SEO title="spicelamp" />
      <CardGrid columns={3}>
        <Card>
          <div>
            <h1>SpiceLamp</h1>
            <h2>Red and white stoneware with black stain</h2>
          </div>
          <Video
            source={SpiceLamp}
            showControls={false}
            filter="brightness(100%)"
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image1.childImageSharp.fluid}
            alt="spice lamp 1"
            style={{ width: 'auto', filter: 'brightness(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image2.childImageSharp.fluid}
            alt="spice lamp 2"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image3.childImageSharp.fluid}
            alt="spice lamp 3"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image4.childImageSharp.fluid}
            alt="spice lamp 4"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image5.childImageSharp.fluid}
            alt="spice lamp 5"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spiceLampImages.image6.childImageSharp.fluid}
            alt="spice lamp 6"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
      </CardGrid>
    </Layout>
  );
};

export default IndexPage;
