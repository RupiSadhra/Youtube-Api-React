import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: {} };
  onTermSubmit = (term) => {
    console.log(term);
    youtube
      .get("/search", { params: { q: term } })
      .then((result) => {
        this.setState({ videos: result.data.items });
      })
      .catch((error) => {
        console.log(`Youtube api error... ${error}`);
      });
  };

  onVideoSelect = (video) => {
    console.log("From App:", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
