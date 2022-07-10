import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

test('should include the app name', () => {
  render(<Logo />)
  const appName = screen.getByText('PRODUCTIVO')

  expect(appName).toBeInTheDocument()
})