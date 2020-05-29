import React from "react";
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

configure({adapter: new Adapter()});
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of the app", () => {
    expect(wrapper.find("h1").text()).toContain("Generalized Fibonacci Sequence");
  });

  test("render reset button", () => {
    expect(wrapper.find("button").text()).toBe("Reset Sequence");
  });

  test("render the initial value of first number in sequence", () => {
     expect(wrapper.find("#inputbox1").get(0).props.value).toBe("0");
  });

  test("render the initial value of second number in sequence", () => {
    expect(wrapper.find("#inputbox2").get(0).props.value).toBe("1");
  });

});
