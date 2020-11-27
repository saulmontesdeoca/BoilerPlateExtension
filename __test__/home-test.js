import React from "react";
import { shallow } from "enzyme";
import Home from "../src/pages/Home";
import Button from "./Button";

describe("Download Button Component", () => {
	it("Download Button click event", () => {
		const mockCallBack = jest.fn();
		const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
		button.find("button").simulate("click");
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});
});
