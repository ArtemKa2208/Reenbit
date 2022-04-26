export const getChats = async () => {
  const response = await fetch('http://localhost:3004/chats');

  return response.json();
};
