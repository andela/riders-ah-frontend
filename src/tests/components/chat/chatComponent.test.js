import {MemoryRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import Chat from "../../../components/chat/chat";
import { store } from "../../../../helpers/utils/testUtils";

const props = {
  getChat: jest.fn(),
  auth: { user: {} },
}
let buttons = null;
const chatComponent = mount(
    <Provider store={store} >
        <MemoryRouter>
            <Chat {...props} />
        </MemoryRouter>
    </Provider>
  );
const chat = {message:[{message:'',User:{}}]}
describe("Chat component", () => {
    beforeEach(() => {
        localStorage.setItem(
          'user',
          JSON.stringify({ username: 'test', notificationSettings: ['hey'] })
        );
      });
      it('render components', () => {
        expect(chatComponent).toHaveLength(1);
      });
      it('simulate button clicks', () => {
        const component = chatComponent.find('Chat');
        buttons = chatComponent.find('img');
        buttons.map(btn => btn.simulate('click', {}));
        expect(component.instance().handleSubmit).toBeDefined();
      });
      it('componentWillReceiveProps', () => {
        const component = chatComponent.find('Chat');
        component.instance().forceUpdate();
        component.update();
        component.instance().componentWillReceiveProps(chat);
        expect(component.find('.message-list').length).toBe(1);
      })
});
