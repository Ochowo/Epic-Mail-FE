import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from '../../components/signin/signIn';
import { mockStore } from '../../../mocks/mockConfig';

const store = mockStore({ auth: {} });

const props = {
  showForm: () => {},
  loginUser: () => {},
  auth: {},
  errors: {},
  store,
};
const setUp = () => {
  const component = shallow(<SignIn {...props} store={store} />);
  return component;
};
describe('Signin component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    component.setProps({ isAuthenticated: true });
    expect(component).toMatchSnapshot();
  });
  it('ensure onchange is called for email', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#email3');
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
    const form = component.find('#pass3');
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
    const FormSpy = jest.spyOn(component.instance(), 'showForm');
    const form = component.find('#loggg');
    expect(form.length).toBe(1);
    form.simulate('click');
    component.instance().showForm();
    expect(FormSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the resetForm method', () => {
    const FormSpy = jest.spyOn(component.instance(), 'resetForm');
    const form = component.find('#forg');
    expect(form.length).toBe(1);
    form.simulate('click');
    component.instance().resetForm();
    expect(FormSpy).toHaveBeenCalledTimes(1);
  });
});
