import React from "react";
import App from "../components/App";
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);
jest.useFakeTimers();


it("All timers should be terminated on unmounting the components", done => {
  const { container, unmount } = render(<App />,)
  unmount()
  jest.runAllTimers();
  expect(clearInterval).toHaveBeenCalledTimes(1);
  done()
})
