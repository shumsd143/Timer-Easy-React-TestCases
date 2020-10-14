import React from "react";
import App from "../components/App";
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);


jest.useFakeTimers();
it("SetInterval Should be used to update the timer", done => {
  const { container, unmount } = render(<App />,)
  unmount()
  
  expect(setInterval).toHaveBeenCalledTimes(1);
  done()
})

