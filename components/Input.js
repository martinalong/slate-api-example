import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

const STYLES_INPUT = css`
  box-sizing: border-box;
  font-family: ${Constants.font.text};
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  background: transparent;
  font-size: 14px;
  border-radius: 8px;

  padding: 0 16px 0 16px;
  outline: 0;
  border: none;
  box-sizing: border-box;
  transition: 200ms ease all;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  border-radius: 4px;
  background: ${Constants.system.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0 0 0 1px ${Constants.semantic.borderGrayLight} inset;
  color: ${Constants.system.black};

  background-color: rgba(242, 242, 247, 0.7);
  box-shadow: ${Constants.shadow.lightLarge};
  border-radius: 8px;
  &::placeholder {
    color: ${Constants.semantic.textGrayDark};
  }

  :focus {
    outline: 0;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${Constants.system.darkGray};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${Constants.system.darkGray};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${Constants.system.darkGray};
  }
`;

export const Input = (props) => {
  return <input {...props} css={STYLES_INPUT} />;
};
