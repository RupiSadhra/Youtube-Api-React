import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onTermSubmit(this.state.term);
          }}
          className="ui form"
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
