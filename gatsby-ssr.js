const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  const metaHeadComponents = headComponents.filter(
    (component) => component.type === 'meta'
  );

  const styleHeadComponents = headComponents.filter(
    (component) => component.type === 'style'
  );

  const scriptHeadComponents = headComponents.filter(
    (component) => component.type === 'script'
  );

  const nonStyleHeadComponents = headComponents.filter(
    (component) =>
      component.type !== 'style' ||
      component.type !== 'script' ||
      component.type !== 'meta'
  );

  replaceHeadComponents([
    metaHeadComponents,
    styleHeadComponents,
    scriptHeadComponents,
    nonStyleHeadComponents,
  ]);
};
