import React from "react";
import App from "./App";
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);
jest.useFakeTimers();


it("All timers should be terminated on unmounting the components", done => {
  const { container, unmount } = render(<App />,)
  unmount()
  jest.runAllTimers();
  //if all timer are not terminated then function will never reach here and done will never be called hence test case will fail
  done()
})
