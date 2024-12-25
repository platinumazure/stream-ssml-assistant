const usernamePronunciationMap: Record<string, string> = {
  platinumazure: '"pl{tIn@m{Z@r',
};

// Regular expression to capture words
const wordRegex = /\w+/g;

export class ChatMessage {
  constructor(private username: string, private message: string) {
  }

  generatePhoneme(word: string): string {
    const lowerCaseWord = word.toLowerCase();

    if (lowerCaseWord in usernamePronunciationMap) {
      const ssmlFriendlyPronunciation = usernamePronunciationMap[lowerCaseWord].replace(/"/g, '&quot;');

      return `<phoneme alphabet="x-sampa" ph="${ssmlFriendlyPronunciation}">${word}</phoneme>`;
    }

    return word;
  }

  toSSML(): string {
    const usernameToRead = this.generatePhoneme(this.username);
    const messageToRead = this.message.replace(wordRegex, word => this.generatePhoneme(word));

    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en"><voice name="en-GB-SoniaNeural"><p>${usernameToRead} says: ${messageToRead}</p></voice></speak>`;
  }
}
