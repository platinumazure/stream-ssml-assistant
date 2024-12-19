import process from 'node:process';
import { ChatMessage } from './chat-message.js';

const username = process.argv[2];
const chatMessage = process.argv[3];

// Create a new ChatMessage instance
const chatMessageInstance = new ChatMessage(username, chatMessage);

// eslint-disable-next-line no-console -- This is a CLI script, so we need to use console.log
console.log(chatMessageInstance.toSSML());
