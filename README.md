# ChatBox - Real Time Chat Rooms

ChatBox is a simple, real-time chat application that allows users to join multiple chat rooms using a username—no sign-up required. Messages are ephemeral (non-persistent), making ChatBox a great place for casual, in-the-moment conversations.

## Features

- **Real-Time Messaging:** Powered by [Socket.io](https://socket.io/), all messages update instantly.
- **Multiple Chat Rooms:** Users can join various chat rooms to discuss different topics.
- **Simple & No Sign-Up:** Enter a username and start chatting immediately—no registration required.
- **Ephemeral Chats:** Messages disappear once you leave the chat, keeping conversations light and transient.
- **Custom User Colors:** Usernames are assigned random colors using [randomcolor](https://www.npmjs.com/package/randomcolor) for easy identification.
- **Time-Stamped Messages:** [Moment.js](https://momentjs.com/) is used to format chat timestamps.

## Live Demo

Check out ChatBox live at: [https://chatbox-ec3s.onrender.com/](https://chatbox-ec3s.onrender.com/)

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/chatbox.git
```

Install the dependencies:

```bash
npm install
```

## Usage

Start the application in production mode:

```bash
npm start
```

For development (with live-reloading via [nodemon](https://nodemon.io/)):

```bash
npm run dev
```

Once running, open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in your environment) to start chatting.

## Technologies

- **Express:** Web framework for Node.js.
- **Socket.io:** Real-time bidirectional event-based communication.
- **Moment.js:** Date and time formatting.
- **RandomColor:** Generates random colors for user nicknames.
- **Nodemon:** Automatically restarts the server during development.

## Contributing

Contributions, bug reports, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
