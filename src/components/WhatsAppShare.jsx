function WhatsAppShare() {

  const message =
    "💍 You're invited to our wedding!\n\nJoin us on 06 December 2026 💖\n\nLocation: Sri Sai Lilaranga Mandhira";

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" className="whatsapp-float">
      📤 Share Invite
    </a>
  );
}

export default WhatsAppShare;