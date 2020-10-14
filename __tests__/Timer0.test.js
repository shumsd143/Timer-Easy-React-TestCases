import React from "react";
import App from "../components/App";
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

jest.useFakeTimers();

it("SetInterval Should be cleared after unmounting", done => {
  const { container, unmount } = render(<App />,)
  unmount()
  
  jest.runAllTimers();
  // jest.runOnlyPendingTimers()
  expect(setInterval).toHaveBeenCalledTimes(1);
  done()
})

