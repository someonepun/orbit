import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import CallOutBanner from "..";
import Illustration from "../../Illustration";

describe("CallOutBanner", () => {
  const user = userEvent.setup();

  it("flat", () => {
    render(
      <CallOutBanner
        dataTest="test"
        id="ID"
        title="title"
        description="description"
        tabIndex={0}
        illustration={
          <Illustration dataTest="illustration" name="Accommodation" size="extraSmall" />
        }
      />,
    );
    const banner = screen.getByTestId("test");
    expect(banner).toHaveAttribute("tabindex", "0");
    expect(banner).toHaveAttribute("id", "ID");
    expect(banner.textContent).toMatch("title");
    expect(banner.textContent).toMatch("description");
    expect(screen.getByTestId("illustration"));
  });
  it("actionable", async () => {
    const onClick = jest.fn();
    render(<CallOutBanner dataTest="test" title="title" onClick={onClick} />);
    const banner = screen.getByTestId("test");
    expect(banner).toHaveAttribute("tabindex", "0");
    await user.click(banner);
    expect(onClick).toHaveBeenCalled();
  });
});
