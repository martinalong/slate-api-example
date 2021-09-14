import * as React from "react";
import * as Constants from "~/common/constants";

import CodeBlock from "~/components/CodeBlock";

import { css } from "@emotion/react";
import { ButtonPrimary } from "~/components/Buttons";
import { Input } from "~/components/Input";

const BACKGROUND_IMAGE =
  "https://slate.textile.io/ipfs/bafybeiddgkvf5ta6y5b7wamrxl33mtst4detegleblw4gfduhwm3sdwdra";
const API_KEY = "PUT-YOUR-API-KEY-HERE";

const STYLES_BACKGROUND = css`
  background-image: url(${BACKGROUND_IMAGE});
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STYLES_MODAL = css`
  width: 800px;
  height: 700px;
  border-radius: 8px;
  padding: 64px 40px;
  overflow-y: scroll;

  @supports (
    (-webkit-backdrop-filter: blur(75px)) or (backdrop-filter: blur(75px))
  ) {
    -webkit-backdrop-filter: blur(75px);
    backdrop-filter: blur(75px);
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const STYLES_HIDDEN = css`
  display: none;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <div css={STYLES_BACKGROUND}>
        <div css={STYLES_MODAL}>
          <UploadExample />
          {/* <UpdateExample /> */}
        </div>
      </div>
    );
  }
}

class UploadExample extends React.Component {
  state = {
    slateId: null,
    file: null,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  _handleUpload = async (e) => {
    const url = `https://uploads.slate.host/api/public${
      this.state.slateId ? `/${this.state.slateId}` : ""
    }`;
    const files = e.target.files;
    for (let file of files) {
      let data = new FormData();
      data.append("data", file);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: API_KEY,
          },
          body: data,
        });
        const json = await response.json();
        console.log(json);
        const file = json.data;
        this.setState({ file });
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    return (
      <div style={{ width: "100%", paddingBottom: 48 }}>
        <h2 style={{ marginBottom: 12 }}>Uploading to Slate</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 800,
          }}
        >
          <Input
            style={{ marginTop: 24 }}
            type="text"
            id="slateId"
            onChange={this._handleChange}
            placeholder="Slate ID (optional)"
          />
          <input
            css={STYLES_HIDDEN}
            multiple
            type="file"
            id="file"
            onChange={this._handleUpload}
          />
          <ButtonPrimary
            full
            type="label"
            htmlFor="file"
            style={{ margin: "16px 0px" }}
          >
            Add file
          </ButtonPrimary>
          <CodeBlock
            children={
              this.state.file
                ? JSON.stringify(this.state.file, null, "\t")
                : "//response will be displayed here"
            }
            style={{ maxWidth: "820px" }}
            title="Uploaded file"
          />
        </div>
      </div>
    );
  }
}

class UpdateExample extends React.Component {
  state = {
    slateId: null,
    file: null,
    updatedName: "",
    updatedFile: null,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  _handleFetch = async (e) => {
    const url = `https://uploads.slate.host/api/v2/public/upload-by-url`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify({
          data: {
            url:
              "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg",
            filename: "Doggo",
          },
        }),
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  _handleUpdate = async (e) => {
    const url = "https://slate.host/api/v2/update-file";

    const file = this.state.file;
    let fileUpdates = {
      ...file,
      data: { ...file.data, name: this.state.updatedName },
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify({ data: fileUpdates }),
      });
      const json = await response.json();
      console.log(json);
      const updatedFile = json.file;
      this.setState({ updatedFile });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div style={{ width: "100%", paddingBottom: 48 }}>
        <h2 style={{ marginBottom: 12 }}>Updating a file</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 800,
          }}
        >
          <h4 style={{ marginTop: 24 }}>Fetching the File</h4>
          <ButtonPrimary
            full
            onClick={this._handleFetch}
            style={{ margin: "16px 0px" }}
          >
            Fetch data
          </ButtonPrimary>
          <CodeBlock
            children={
              this.state.file
                ? JSON.stringify(this.state.file, null, "\t")
                : "//response will be displayed here"
            }
            style={{ maxWidth: "820px" }}
            title="Last uploaded file"
          />
          <h4 style={{ marginTop: 48 }}>Updating the File</h4>
          <Input
            style={{ marginTop: 16 }}
            type="text"
            id="updatedName"
            onChange={this._handleChange}
            placeholder="Updated name"
          />
          <ButtonPrimary
            full
            onClick={this._handleUpdate}
            style={{ margin: "16px 0px" }}
          >
            Update file
          </ButtonPrimary>
          <CodeBlock
            children={
              this.state.updatedFile
                ? JSON.stringify(this.state.updatedFile, null, "\t")
                : "//response will be displayed here"
            }
            style={{ maxWidth: "820px" }}
            title="Updated file"
          />
        </div>
      </div>
    );
  }
}
