import * as React from "react";
import * as Styles from "~/common/styles";

export const H1 = (props) => {
  return <h1 {...props} css={[Styles.H1, props?.css]} />;
};

export const H2 = (props) => {
  return <h2 {...props} css={[Styles.H2, props?.css]} />;
};

export const H3 = (props) => {
  return <h3 {...props} css={[Styles.H3, props?.css]} />;
};

export const H4 = (props) => {
  return <h4 {...props} css={[Styles.H4, props?.css]} />;
};

export const H5 = (props) => {
  return <h5 {...props} css={[Styles.H5, props?.css]} />;
};

export const P1 = (props) => {
  return <p {...props} css={[Styles.P1, props?.css]} />;
};

export const P2 = (props) => {
  return <p {...props} css={[Styles.P2, props?.css]} />;
};

export const P3 = (props) => {
  return <p {...props} css={[Styles.P3, props?.css]} />;
};
