import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../../views/signup/signUp';
import { mockStore } from '../../../mocks/mockConfig';

const store = mockStore({ auth: {} });

const props = {
  showForm: () => {},
  registerUser: () => {},
  auth: {},
  errors: {},
  store,
};
const setUp = () => {
  const component = shallow(<SignUp {...props} store={store} />);
  return component;
};
describe('SignUp component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    component.setProps({ isAuthenticated: true });
    expect(component).toMatchSnapshot();
  });

  it('ensure onchange is called for firstName', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#fname');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
        value: 'test',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });
  it('ensure onchange is called for lastName', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#lname');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'lastName',
        value: 'test',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('ensure onchange is called for email', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#ename');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'email',
        value: 'test@gmail.com',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('ensure onchange is called for password', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#pname');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'password',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('ensure onchange is called for password', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#cname');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'password',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('should call the onSubmit method', () => {
    const LoginSpy = jest.spyOn(component.instance(), 'onSubmit');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'test@gmail.com',
        password: 'password',
      },
    };
    component.instance().onSubmit(event);
    expect(LoginSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the showForm method', () => {
    const FormSpy = jest.spyOn(component.instance(), 'loginForm');
    const form = component.find('#sigg');
    expect(form.length).toBe(1);
    form.simulate('click');
    component.instance().loginForm();
    expect(FormSpy).toBeCalled();
  });
});
