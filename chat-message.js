export class ChatMessage {
    constructor(username, message) {
        this.username = username;
        this.message = message;
    }

    toSSML() {
        return `<speak><p>${this.username} says: ${this.message}</p></speak>`;
    }
}