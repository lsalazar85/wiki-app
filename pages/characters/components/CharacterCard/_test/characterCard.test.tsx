import { render } from "@testing-library/react";
import CharacterCard from "../index";
import { mockTestCharacter } from '../../../../../mocks/mockTest'

describe("CharacterCard", () => {
  it("should render successfully", () => {
    const { asFragment } = render(<CharacterCard data={mockTestCharacter} />);

    expect(asFragment()).toBeDefined();
  });
});
