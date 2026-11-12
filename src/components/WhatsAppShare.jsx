
function WhatsAppShare() {
  const websiteUrl = "https://raghavwedskausalya.in/";

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(websiteUrl)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      📤 Share Invite
    </a>
  );
}

export default WhatsAppShare;
