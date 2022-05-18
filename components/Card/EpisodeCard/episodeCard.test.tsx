import { render } from "@testing-library/react";
import EpisodeCard from "./index";
import { mockTestEpisode } from "../mockTest";

describe("EpisodeCard", () => {
  it("should render successfully", () => {
    const { asFragment } = render(<EpisodeCard data={mockTestEpisode} />);

    expect(asFragment()).toBeDefined();
  });
});
