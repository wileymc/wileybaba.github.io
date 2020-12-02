import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const QuoteContainer = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.pink};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="wiley mckay conte" />
    <p>
      <strong>Welcome to my website.</strong> I’m a software developer with a
      background in economics and ecological agriculture. I am fascinated by
      human-computer interaction and I enjoy building things things that help
      people interface with the real world. I also make pottery and music when
      I’m not writing code or enjoying the great outdoors. Currently, I am
      building software to help improve the immigration process at{' '}
      <a href="https://legalpad.io">Legalpad</a>. Please reach out to me on one
      of the channels below if you’d like to connect.
    </p>
    {/* <QuoteContainer>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>
          A desirable future depends on our deliberately choosing a life of
          action over a life of consumption, on our engendering a lifestyle
          which will enable us to be spontaneous, independent, yet related to
          each other, rather than maintaining a lifestyle which only allows to
          make and unmake, produce and consume – a style of life which is merely
          a way station on the road to the depletion and pollution of the
          environment.
        </p>
        <footer>
          —Ivan Illich, <cite>Tools for Conviviality</cite>
        </footer>
      </blockquote>
    </QuoteContainer> */}
  </Layout>
);

export default IndexPage;
