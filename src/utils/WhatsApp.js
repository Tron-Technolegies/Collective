export const handleChatClick = () => {
  const phoneNumber = "+9710505450359";
  const message = "Hello! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const handleQuoteFormClick = ({
  location,
  destination,
  contact,
  message,
}) => {
  const phoneNumber = "+9710505450359";
  const messageContent = `QUOTE REQUEST\nLOCATION : ${location}\nDESTINATION : ${destination}\nCONTACT : ${contact}\nMESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
