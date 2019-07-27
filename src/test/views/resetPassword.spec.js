import React from 'react';
import { shallow } from 'enzyme';
import Reset from '../../views/resetpassword/resetPassword';

const props = {};
const setUp = () => {
  const component = shallow(<Reset {...props} />);
  return component;
};
describe('Reset password component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    component.setProps({ isAuthenticated: true });
    expect(component).toMatchSnapshot();
  });

  it('should call the loginForm method', () => {
    const FormSpy = jest.spyOn(component.instance(), 'loginForm');
    const form = component.find('#logId');
    expect(form.length).toBe(1);
    form.simulate('click');
    component.instance().loginForm();
    expect(FormSpy).toBeCalled();
  });
});
