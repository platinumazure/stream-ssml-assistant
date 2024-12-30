import { ChatMessage } from './chat-message';

describe('ChatMessage', () => {
  let chatMessage: ChatMessage;

  beforeEach(() => {
    chatMessage = new ChatMessage('ChatterName', 'Message here');
  });

  it('should create an instance', () => {
    expect(chatMessage).toBeTruthy();
  });

  describe('toSSML', () => {
    it('should return SSML with phoneme for known username', () => {
      chatMessage = new ChatMessage('platinumazure', 'Hello world');
      const ssml = chatMessage.toSSML();
      expect(ssml).toContain('<phoneme alphabet="x-sampa" ph="&quot;pl{tIn@m&quot;{Z@r">platinumazure</phoneme>');
    });

    it('should return SSML without phoneme for unknown username', () => {
      chatMessage = new ChatMessage('unknownuser', 'Hello world');
      const ssml = chatMessage.toSSML();
      expect(ssml).toContain('unknownuser');
      expect(ssml).not.toContain('<phoneme');
    });

    it('should return SSML with phoneme for known words in message', () => {
      chatMessage = new ChatMessage('user', 'Hello platinumazure');
      const ssml = chatMessage.toSSML();
      expect(ssml).toContain('<phoneme alphabet="x-sampa" ph="&quot;pl{tIn@m&quot;{Z@r">platinumazure</phoneme>');
    });

    it('should return SSML without phoneme for unknown words in message', () => {
      chatMessage = new ChatMessage('user', 'Hello world');
      const ssml = chatMessage.toSSML();
      expect(ssml).toContain('Hello world');
      expect(ssml).not.toContain('<phoneme');
    });
  });
});
