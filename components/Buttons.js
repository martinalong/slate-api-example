import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

const STYLES_BUTTON = `
  box-sizing: border-box;
  border-radius: 8px;
  outline: 0;
  border: 0;
  min-height: 40px;
  padding: 4px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: ${Constants.font.semiBold};
  transition: 200ms ease all;
  overflow-wrap: break-word;
  user-select: none;
`;

const STYLES_BUTTON_PRIMARY = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: ${Constants.system.blue};
  color: ${Constants.system.white};

  :hover {
    background-color: #0079eb;
  }

  :focus {
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_PRIMARY_DISABLED = css`
  ${STYLES_BUTTON}
  cursor: not-allowed;
  background-color: ${Constants.system.bgBlue};
  color: ${Constants.system.white};
`;

const STYLES_BUTTON_PRIMARY_TRANSPARENT = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: transparent;
  color: ${Constants.system.brand};
`;

export const ButtonPrimary = (props) => {
  if (props.type === "label") {
    return (
      <label
        css={
          props.transparent
            ? STYLES_BUTTON_PRIMARY_TRANSPARENT
            : STYLES_BUTTON_PRIMARY
        }
        style={{ width: props.full ? "100%" : "auto", ...props.style }}
        children={props.children}
        type={props.label}
        htmlFor={props.htmlFor}
        onClick={props.onClick}
      />
    );
  }

  if (props.disabled) {
    return (
      <button
        css={STYLES_BUTTON_PRIMARY_DISABLED}
        style={{ width: props.full ? "100%" : "auto", ...props.style }}
        onClick={props.onClick}
        children={props.children}
      />
    );
  }

  return (
    <button
      css={
        props.transparent
          ? STYLES_BUTTON_PRIMARY_TRANSPARENT
          : STYLES_BUTTON_PRIMARY
      }
      style={{ width: props.full ? "100%" : "auto", ...props.style }}
      onClick={props.onClick}
      children={props.children}
    />
  );
};
