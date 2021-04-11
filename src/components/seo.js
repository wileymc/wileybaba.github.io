import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function SEO({
  description = '',
  lang = 'en',
  meta = [],
  image: metaImage,
  title,
  pathname,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <GatsbySeo
      language={lang}
      title={title}
      titleTemplate="Wiley's %s"
      description={metaDescription}
      canonical={canonical}
      metaTags={meta}
      openGraph={{
        url: site.siteUrl,
        title: site.title ?? title,
        description: metaDescription,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
        ],
        site_name: title,
      }}
      twitter={{
        handle: '@wiley_baba',
        cardType: 'summary_large_image',
      }}
    />
  );
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};
