import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer/footer';

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} title="create an account" />);
  return component;
};
describe('Footer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
