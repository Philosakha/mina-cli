# Maya-cli

The Maya CLI is a versatile utility designed to simplify common tasks related to the Mina blockchain project. With this tool, you can perform various operations, including:

## Features:

### 1. Create Frontend

- **Description**: Quickly set up a frontend for your Mina project using popular frameworks like Next.js and React.js.
- **Usage**:
  ```bash
  npx mina-maya create-frontend
  ```

### 2. Check Balance

- **Description**: Retrieve the balance associated with a specific Mina account using the Mina Explorer API.
- **Usage**:
  ```bash
  npx mina-maya check-balance
  ```

### 3. Check Mina

- **Description**: Obtain essential data about the Mina blockchain network, such as blockchain length, circulating supply, state hash, chain ID, and total currency.
- **Usage**:
  ```bash
  npx mina-maya check-mina
  ```

## Prerequisites:

Before using the Mina Project Command-Line Tool, ensure that you have the following prerequisites installed on your system:

- Node.js: [Node.js Installation Guide](https://nodejs.org/)

## Getting Started:

1. Clone the project repository or download the script.

2. Install project dependencies by running the following command in the project's directory:

   ```bash
   yarn install
   ```

3. Run the script using the following command:

   ```bash
   yarn start <operation>
   ```

4. For building the script, run the following command:

   ```bash
   yarn build
   ```

   The script will be built in the `dist` directory.

## Usage:

To use the tool, run it with one of the specified operations as an argument. For example, to create the frontend, run:

```bash
npx mina-maya create-frontend
```

Replace `npx mina-maya` with the path to the script if needed.

If you specify an invalid operation, the script will display a list of available operations.

## Acknowledgments:

This project utilizes third-party libraries to enhance functionality:

- [chalk](https://www.npmjs.com/package/chalk) for colorful console output.
- [inquirer](https://www.npmjs.com/package/inquirer) for interactive command-line prompts.

## License:

This project is licensed under the MIT License.
