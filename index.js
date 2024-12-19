import { ChatMessage } from './chat-message.js';

const username = process.argv[2];
const chatMessage = process.argv[3];

// Create a new ChatMessage instance
const chatMessageInstance = new ChatMessage(username, chatMessage);

// Print the SSML-formatted chat message
console.log(chatMessageInstance.toSSML());