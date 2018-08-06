import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: ["iphone", "pixel ", "note", "oneplus 6"] };
  }

  handleButtonClick() {
    console.log("button clicked - component");
    alert("Clicked");
  }

  render() {
    return (
      <div>
        <ul>{this.state.products.map(p => <li key={p}>{p}</li>)}</ul>
        <button onClick={this.handleButtonClick}>Click here</button>
      </div>
    );
  }
}

export default ProductList;

/*


yarn add react-test-renderer 


react > 16


*/
