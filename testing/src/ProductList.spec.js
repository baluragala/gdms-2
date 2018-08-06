import React from "react";
import ProductList from "./ProductList";
import renderer from "react-test-renderer";

describe("Product List", () => {
  it("should have initial state with 4 products", () => {
    const tree = renderer.create(<ProductList />);
    const testInstance = tree.root;
    const initialState = {
      products: ["iphone", "pixel ", "note", "oneplus 6"]
    };
    expect(testInstance.instance.state).toMatchObject(initialState);
  });

  it("should render 3 products", () => {
    const tree = renderer.create(<ProductList />);
    const testInstance = tree.root;
    expect(testInstance.findAllByType("li").length).toEqual(4);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should have called alert on button click", () => {
    // const tree = renderer.create(<ProductList />);
    // const testInstance = tree.root;
    // const button = testInstance.findByType("button");
    // console.log(button);
    const mock = jest.fn();
    mock.mockReturnValue("HELLO");
    let status = mock("hello");
    expect(status).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("Hello");
  });

  it("async with done", done => {
    setTimeout(done, 100);
  });

  it("async test with prmoise", () => {
    return new Promise((resolve, reject) => setTimeout(resolve, 100));
  });

  it("async test with async/await", async () => {
    console.log(1);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 100);
    });
    console.log(3);
  });
});
