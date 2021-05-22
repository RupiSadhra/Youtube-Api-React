import React from "react";

class SearchBar extends React.Component {
  state = { term: "cooking" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
