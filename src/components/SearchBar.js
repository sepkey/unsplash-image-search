import { Component } from "react";

class SearchBar extends Component {
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
  // constructor() {
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.term);
  // }
  onFormSubmit(e) {
    e.preventDefault();
    console.log("Search Bar: " + this.state.term);
    this.props.onSubmit(this.state.term);
  }

  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

// console.log(e.target.value);
// console.log(this.state.term);
export default SearchBar;
