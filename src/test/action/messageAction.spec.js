import { postMessages, getInbox } from '../../actions/messagesAction';
import { COMPOSE_MESSAGE, INIT_MESSAGE } from '../../actions/types';
import { mock, mockStore } from '../../../mocks/mockConfig';

const store = mockStore({});
const mockMsg = {
  receiverEmail: 'pricjhgess@gmail.com',
  subject: 'password',
  message: 'password',
};

describe('messageAction', () => {
  it('call post message action success', (done) => {
    mock.onPost().replyOnce(201);
    store
      .dispatch(postMessages(mockMsg))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions[0].type).toBe(INIT_MESSAGE);
      });
    done();
  });

  it('call post message action success', (done) => {
    mock.onPost().replyOnce(201);
    store
      .dispatch(postMessages(mockMsg))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(6);
        expect(actions[1].type).toBe(COMPOSE_MESSAGE);
      });
    done();
  });
  it('call get message action success', (done) => {
    mock.onPost().replyOnce(200);
    store
      .dispatch(getInbox())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(8);
      });
    done();
  });
});
