import { render } from "@testing-library/react";
import List from "./index";

describe("List", () => {
  it("should render successfully", () => {
    const { asFragment } = render(
      <List onScroll={jest.fn}>
        <div>Hello World</div>
      </List>
    );

    expect(asFragment()).toBeDefined();
  });
});
