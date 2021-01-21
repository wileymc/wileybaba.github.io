import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Card } from '../../components/base';
import Video from '../../components/video';
import SpaceChicken from '../../videos/spacechicken.mp4';

const CardGrid = styled.main`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  grid-template-rows: masonry;
  align-content: start;
`;

const IndexPage = () => {
  const spaceChickenImages = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "art/spacechicken1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(relativePath: { eq: "art/spacechicken2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(relativePath: { eq: "art/spacechicken3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file(relativePath: { eq: "art/spacechicken4.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  window.spaceChickenImages = spaceChickenImages;

  return (
    <Layout>
      <SEO title="space chicken" />
      <CardGrid columns={3}>
        <Card>
          <div>
            <h1>Space Chicken</h1>
            <h2>Red and white stoneware with black stain</h2>
          </div>
          <Video
            source={SpaceChicken}
            showControls={false}
            filter="brightness(100%)"
          />
        </Card>
        <Card>
          <Img
            fluid={spaceChickenImages.image1.childImageSharp.fluid}
            alt="space chicken 1"
            style={{ width: 'auto', filter: 'brightness(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spaceChickenImages.image2.childImageSharp.fluid}
            alt="space chicken 2"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spaceChickenImages.image3.childImageSharp.fluid}
            alt="space chicken 3"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
        <Card>
          <Img
            fluid={spaceChickenImages.image4.childImageSharp.fluid}
            alt="space chicken 4"
            style={{ width: 'auto', filter: 'contrast(135%)' }}
          />
        </Card>
      </CardGrid>
    </Layout>
  );
};

export default IndexPage;
