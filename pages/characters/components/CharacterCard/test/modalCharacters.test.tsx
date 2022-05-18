import { render } from "@testing-library/react";
import ModalCharactersList from '../ModalCharacters';
import { QueryClient, QueryClientProvider } from "react-query";

describe("ModalCharactersList", () => {
    it("should render successfully", () => {
        const queryClient = new QueryClient();

        const { asFragment } = render(
            <QueryClientProvider client={queryClient}>
                <ModalCharactersList id='2' />
            </QueryClientProvider>
        );

        expect(asFragment()).toBeDefined();
    });
});
