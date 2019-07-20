import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../views/signup';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Welcome />);
  });
});
