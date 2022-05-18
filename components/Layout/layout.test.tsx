import { render } from "@testing-library/react";
import Layout from "./index";

describe("Layout", () => {
  it("should render successfully", () => {
    const { asFragment } = render(
      <Layout>
        <div>Hello World</div>
      </Layout>
    );

    expect(asFragment()).toBeDefined();
  });
});
