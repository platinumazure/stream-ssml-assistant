import { ChatMessage } from './chat-message';

describe('chatMessage', () => {
  let chatMessage: ChatMessage;

  beforeEach(() => {
    chatMessage = new ChatMessage('ChatterName', 'Message here');
  });

  it('should create an instance', () => {
    expect(chatMessage).toBeTruthy();
  });
});
