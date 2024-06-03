import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom tests", () => {
  it("should apply margin bottom to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    // Check if the BodySection component is rendered
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if the margin is correctly applied
    const bodySectionWrapper = wrapper.find(BodySection);
    expect(bodySectionWrapper.prop("title")).toEqual("test title");
    expect(bodySectionWrapper.hasClass("bodySectionWithMargin")).toBe(true);
  });
});