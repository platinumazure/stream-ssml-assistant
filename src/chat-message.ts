export class ChatMessage {
  constructor(private username: string, private message: string) {
  }

  toSSML(): string {
    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en"><p>${this.username} says: ${this.message}</p></speak>`;
  }
}
