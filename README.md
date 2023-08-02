

# Bot Battlr

Bot Battlr is a web application that allows users to create their own bot army and battle with other bots.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Features

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to your army by clicking on it. The selected bot should render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
- Release a bot from your army by clicking on it. The bot disappears from the `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.

## Technologies Used

- React
- CSS
- JSON Server (for the backend)

## Setup

1. Clone the repository to your local machine.
2. Install the required dependencies using npm:

   ```
   npm install
   ```
   json-server --watch db.json --port 8001
3. Run the JSON Server to mock the backend:

   ```
   npm run server
   ```

4. In a separate terminal, start the React development server:

   ```
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to see the application.

## How to Use

1. On the main page, you will see a list of all available bots in the `BotCollection` section.
2. To add a bot to your army, click on the "Enlist" button below the bot's details. The bot will be enlisted in your army and appear in the `YourBotArmy` section.
3. To discharge a bot from the service forever, click the "x" button below the bot's details in the `YourBotArmy` section. The bot will be deleted both from the backend and the `YourBotArmy` on the frontend.

## Screenshots


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Author

mwaniki-Titus
- GitHub: [mwaniki-Titus](https://github.com/mwaniki-Titus)

## License

This project is licensed under the [MIT License](https://github.com/mwaniki-Titus).

---
