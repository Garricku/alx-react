import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<BodySection title="Test Title" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render the correct title", () => {
    const title = "Test Title";
    const wrapper = shallow(<BodySection title={title} />);

    expect(wrapper.find("h2").text()).toEqual(title);
  });

  it("should render children", () => {
    const children = <p>Test Children</p>;
    const wrapper = shallow(<BodySection title="Test Title">{children}</BodySection>);

    expect(wrapper.contains(children)).toBe(true);
  });
});