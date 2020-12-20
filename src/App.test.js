import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "count").text();
  expect(counter).toBe("0");
});

test("clicking on button increments counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate("click");

  // find hte display and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders debug options", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
