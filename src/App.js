import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: "nothing"
    };
  }

  handleVideoListEntryClick(videoTitle) {
    this.setState(
      {
        currentVideo: videoTitle
      },
      () => {
        console.log("APP STATE", this.state);
      }
    );
  }

  render() {
    return (
      <div
        className="App"
        style={{ margin: "0 12px", height: "800px", border: "3px solid green" }}
      >
        <h1>App</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{ height: "300px", width: "300px", border: "1px solid red" }}
          >
            <h3>Video Player</h3>
            <VideoPlayer videoTitle={this.state.currentVideo} />
          </div>

          <div
            style={{
              height: "300px",
              width: "300px",
              border: "1px solid blue"
            }}
          >
            <h3>Video List</h3>
            <VideoList
              onVideoListEntryClick={videoTitle =>
                this.handleVideoListEntryClick(videoTitle)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const VideoList = props => {
  console.log("VIDEO LIST PROPS", props);

  return (
    <ul className="video-list">
      <VideoListEntry
        onVideoListEntryClick={videoTitle => {
          console.log("VIDEO TITLE IN VIDEO LIST", videoTitle);

          props.onVideoListEntryClick(videoTitle);
        }}
        title="Homeward Bound"
      />
      <VideoListEntry
        onVideoListEntryClick={videoTitle => {
          console.log("VIDEO TITLE IN VIDEO LIST", videoTitle);

          props.onVideoListEntryClick(videoTitle);
        }}
        title="Mrs. Doubtfire"
      />
      <VideoListEntry
        onVideoListEntryClick={videoTitle => {
          console.log("VIDEO TITLE IN VIDEO LIST", videoTitle);

          props.onVideoListEntryClick(videoTitle);
        }}
        title="Cool Runnings"
      />
    </ul>
  );
};

const VideoListEntry = props => {
  const { onVideoListEntryClick } = props;

  return (
    <li
      className="video-list-entry"
      onClick={() => onVideoListEntryClick(props.title)}
    >
      {props.title}
    </li>
  );
};

const VideoPlayer = props => {
  const { videoTitle } = props;

  return (
    <div>
      I am a video player. I am playing{" "}
      <span style={{ fontWeight: "700" }}>{videoTitle}</span>
    </div>
  );
};

export default App;
