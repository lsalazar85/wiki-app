import { render } from "@testing-library/react";
import ModalEpisodesList from "./index";
import { QueryClient, QueryClientProvider } from "react-query";

describe("ModalEpisodesList", () => {
  it("should render successfully", () => {
    const queryClient = new QueryClient();

    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
          <ModalEpisodesList id='2' />
      </QueryClientProvider>
    );

    expect(asFragment()).toBeDefined();
  });
});
