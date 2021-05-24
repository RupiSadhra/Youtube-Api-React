import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    youtube
      .get("/search", { params: { q: "america's got talent" } })
      .then((result) => {
        this.setState({
          videos: result.data.items,
          selectedVideo: result.data.items[0],
        });
      })
      .catch((error) => {
        console.log(`Youtube api error... ${error}`);
      });
  }
  onTermSubmit = (term) => {
    youtube
      .get("/search", { params: { q: term } })
      .then((result) => {
        this.setState({
          videos: result.data.items,
          selectedVideo: result.data.items[0],
        });
      })
      .catch((error) => {
        console.log(`Youtube api error... ${error}`);
      });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
