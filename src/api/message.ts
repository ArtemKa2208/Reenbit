import { Message } from '../react-app-env.d';

export const addMessage = async (message: Message) => {
  const response = await fetch('http://localhost:3004/messages', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const getMessages = async () => {
  const response = await fetch('http://localhost:3004/messages');

  return response.json();
};

export const getMessageFromChuck = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');

  return response.json();
};
