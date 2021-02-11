import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const appStorePath = require('../images/icons/app_store.svg');
const timerLogoPath = require('../images/icons/timer_logo.png');

const IndexPage = () => (
  <Layout>
    <SEO title="Gap Timer" />

    <h1 style={{ textAlign: 'center' }}>Gap Timer</h1>
    <a
      style={{ display: 'flex', justifyContent: 'center' }}
      href="https://apps.apple.com/ru/app/gap-timer/id1530987670#?platform=iphone"
    >
      <img
        src={timerLogoPath}
        style={{ borderRadius: '25%' }}
        alt="colorful circle on black"
      />
    </a>
    <p>
      A simple, yet powerful tool for high intensity interval training. Or
      cooking. Or anything that uses a timer and you like these colors better
      than your iPhones stock timer. No ads, easy to use, no need to purchase
      any extras in app. Download it and get ripping!
    </p>

    <a
      style={{ display: 'flex', justifyContent: 'center' }}
      href="https://apps.apple.com/ru/app/gap-timer/id1530987670#?platform=iphone"
    >
      <img src={appStorePath} alt="apple app store download" />
    </a>
  </Layout>
);

export default IndexPage;
