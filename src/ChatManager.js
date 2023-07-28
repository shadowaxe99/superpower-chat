import axios from 'axios';

// Existing code...

const shareChat = (chatId) => {
  // Find the chat to share
  const chatToShare = chats.find((chat) => chat.id === chatId);
  if (!chatToShare) {
    console.error('Chat not found:', chatId);
    return;
  }

  // Create a snapshot of the chat
  const chatSnapshot = JSON.stringify(chatToShare);

  // Send the chat snapshot to the server
  axios.post('https://your-server.com/api/chats', { chat: chatSnapshot })
    .then((response) => {
      console.log('Chat shared successfully:', response.data);
    })
    .catch((error) => {
      console.error('Failed to share chat:', error);
    });
};

// Existing code...