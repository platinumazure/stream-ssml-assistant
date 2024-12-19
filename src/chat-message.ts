export class ChatMessage {
  constructor(private username: string, private message: string) {
  }

  toSSML(): string {
    return `<speak><p>${this.username} says: ${this.message}</p></speak>`;
  }
}
