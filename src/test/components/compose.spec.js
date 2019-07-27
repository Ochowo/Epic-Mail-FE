import React from 'react';
import { shallow } from 'enzyme';
import { ComposeMessage } from '../../components/composeMessage/compose';
import { mockStore } from '../../../mocks/mockConfig';

const store = mockStore({ auth: {} });

const props = {
  message: {},
  errors: {},
  store,
  postMessages: () => {},
};
const setUp = () => {
  const component = shallow(<ComposeMessage {...props} store={store} />);
  console.log(component.debug());
  return component;
};
describe('Signin component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('ensure onchange is called for email', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#receiverEmail');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'receiverEmail',
        value: 'test@gmail.com',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('ensure onchange is called for subject', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#subject');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'subject',
        value: 'password',
      },
    };
    form.simulate('change', event);
    component.instance().onChange(event);
    expect(handleChangeSpy).toHaveBeenCalled();
    done();
  });

  it('ensure onchange is called for message', (done) => {
    const handleChangeSpy = jest.spyOn(component.instance(), 'onChange');
    const form = component.find('#message');
    expect(form.length).toBe(1);
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'message',
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
        receiverEmail: 'test@gmail.com',
        subject: 'password',
        message: 'password',
      },
    };
    component.instance().onSubmit(event);
    expect(LoginSpy).toHaveBeenCalledTimes(1);
  });
});
