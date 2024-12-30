/**
 * A map that associates usernames with their phonetic pronunciations.
 * The key is the username as a string, and the value is the pronunciation
 * in the X-SAMPA format.
 *
 * Example:
 * ```typescript
 * const usernamePronunciationMap: Record<string, string> = {
 *   platinumazure: '"pl{tIn@m"{Z@r',
 * };
 * ```
 */
const usernamePronunciationMap: Record<string, string> = {
  platinumazure: '"pl{tIn@m"{Z@r',
};

// Regular expression to capture words
const wordRegex = /\w+/g;

/**
 * Represents a chat message with a username and message content.
 * Provides functionality to convert the message to SSML (Speech Synthesis Markup Language).
 */
export class ChatMessage {
  /**
   * Creates an instance of ChatMessage.
   * @param username - The username of the person sending the message.
   * @param message - The content of the message.
   */
  constructor(private username: string, private message: string) {}

  /**
   * Generates a phoneme representation of a word if it exists in the username pronunciation map.
   * @param word - The word to generate a phoneme for.
   * @returns The SSML phoneme representation of the word or the original word if no phoneme is found.
   */
  private generatePhoneme(word: string): string {
    const lowerCaseWord = word.toLowerCase();

    if (lowerCaseWord in usernamePronunciationMap) {
      const ssmlFriendlyPronunciation = usernamePronunciationMap[lowerCaseWord].replace(/"/g, '&quot;');

      return `<phoneme alphabet="x-sampa" ph="${ssmlFriendlyPronunciation}">${word}</phoneme>`;
    }

    return word;
  }

  /**
   * Converts the chat message to SSML format.
   * @returns The SSML representation of the chat message.
   */
  toSSML(): string {
    const usernameToRead = this.generatePhoneme(this.username);
    const messageToRead = this.message.replace(wordRegex, word => this.generatePhoneme(word));

    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en"><voice name="en-GB-SoniaNeural"><p>${usernameToRead} says: ${messageToRead}</p></voice></speak>`;
  }
}
