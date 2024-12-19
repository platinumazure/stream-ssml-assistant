/* eslint-disable no-console -- This is a CLI script, so we need to use console.log */
import process from 'node:process';
import { ChatMessage } from './chat-message.js';

const username = process.argv[2];
const chatMessage = process.argv[3];

if (username && chatMessage) {
  const chatMessageInstance = new ChatMessage(username, chatMessage);
  console.log(chatMessageInstance.toSSML());
}
else {
  console.error('Please provide a username and a chat message.');
}
