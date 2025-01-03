# Stream SSML Assistant

## Project Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/platinumazure/stream-ssml-assistant.git
    ```
2. Navigate to the project directory:
    ```sh
    cd stream-ssml-assistant
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

## Compiling the Code

To compile the code, run the Typescript compiler:

```sh
npx tsc
```

Optionally, run the Typescript compiler in watch mode in a separate terminal to ensure the files are compiled after every change:

```sh
npx tsc --watch
```

## Executing the Code

To execute the code with arguments, use the following command:

```sh
node dist/index.js <username> <chatMessage>
```

Replace `<username>` with the desired username and `<chatMessage>` with the message you want to convert to SSML. For example:

```sh
node dist/index.js Alice "Hello, how are you?"
```

## Running Tests

This project uses Jest for unit tests.

To run the tests, use:
```sh
npm test
```

## Setting up Pre-Commit Hooks

To set up pre-commit hooks, Husky needs to be installed and configured. This is already handled by the `prepare` script in the `package.json` file. When you run `npm install`, Husky will automatically set up the necessary Git hooks.

If you need to manually install or update Husky hooks, you can run:

```sh
npx husky install
```

This will ensure that Husky is properly set up to manage your pre-commit hooks.
