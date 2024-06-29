import { render, fireEvent, screen } from "@testing-library/react";
import Card from "./Card";

it("works when displaying a card", function() {
    const { testCard } = render(
        <Card
            caption="testing card"
            src="test4.com"
            currNum={3}
            totalNum={5}
        />
    );

    expect(
        screen.getByText("testing card")
    ).toBeInTheDocument();
    expect(
        screen.getByText("Image 3 of 5.")
    ).toBeInTheDocument();
    expect(
        testCard
    ).toMatchSnapshot();
});