import React from "react";
import renderer from "react-test-renderer";
import AppNavbar from "../components/AppNavbar";

//Snapchot-test of AppNavBar
test("Test AppNavbar", () => {
  const tree = renderer.create(<AppNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
