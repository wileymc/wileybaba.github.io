import React from 'react';
import styled from 'styled-components';
import { BookCard, Card } from '../components/base';
import Layout from '../components/layout';
import SEO from '../components/seo';

const appStorePath = require('../images/icons/app_store.svg');
const timerLogoPath = require('../images/icons/timer_logo.png');

const IndexPage = () => (
  <Layout>
    <SEO title="Gap Timer" />
    <Card style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
      <a href="https://apps.apple.com/us/app/gap-timer/id1530987670#?platform=iphone">
        <img
          src={timerLogoPath}
          style={{ height: 300, width: 300, borderRadius: '25%' }}
          alt="colorful circle on black"
        />
      </a>
      <div style={{ padding: '0 1.5rem' }}>
        <h1 style={{ fontSize: '3em' }}>Gap Timer</h1>
        <p style={{ margin: '1rem 0' }}>
          A simple, yet powerful tool for high intensity interval training. Or
          cooking. Or anything that uses a timer and you like these colors
          better than your iPhones stock timer. No ads, easy to use, no need to
          purchase any extras in app. Download it and get ripping!
        </p>
        <a
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: 80,
          }}
          href="https://apps.apple.com/us/app/gap-timer/id1530987670#?platform=iphone"
        >
          <img src={appStorePath} alt="apple app store download" />
        </a>
      </div>
    </Card>
  </Layout>
);

export default IndexPage;
