import { render } from "@testing-library/react";
import Header from "./index";
import { LOGO_URL } from "../../constants/urls";

describe("Header", () => {
  it("should render successfully", () => {
    const { asFragment } = render(
      <Header urlLogo={LOGO_URL} text="Header Text" />
    );

    expect(asFragment()).toBeDefined();
  });
});
