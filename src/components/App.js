import SearchBar from "./SearchBar";
import { Component } from "react";
// const Ap = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "15px" }}>
//       <SearchBar />
//     </div>
//   );
// };

class App extends Component {
  onSearchSubmit(term) {
    console.log("App:" + term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
