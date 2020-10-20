import React from "react";
import { act } from "react-dom/test-utils";
import App from "./App";
import { shallow } from "enzyme"
import Enzyme from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
afterEach(cleanup);

it("Timer Should have date varible in state", () => {
  const Timer = shallow(<App />)
  const time1 = Timer.state('date')
  expect(time1).not.toBe(undefined)
})


it('Timer Should Update within one Sec', done => {
  const Timer = shallow(<App />)
  const time1 = Timer.state('date')
  try {
    setInterval(() => {
      const time2 = Timer.state('date')
      expect(time1).not.toBe(time2)
      done();
    }, 1000)
  }
  catch (error) {
    done(error)
  }
});

it('Timer Should Increase by 3 Sec', done => {
  const Timer = shallow(<App />)
  const time1 = new Date(Timer.state('date'))
  try {
    setInterval(() => {
      const time2 = new Date(Timer.state('date'))
      expect((time2 - time1) / 1000).toBeGreaterThan(3)
      done();
    }, 3100)
  }
  catch (error) {
    done(error)
  }
});
