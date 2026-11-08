
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_6441w4k";
const TEMPLATE_ID = "template_q9ce43q";
const PUBLIC_KEY = "ATZHJPwqNU6hIcdcz";

export const sendRSVP = async (data) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      guest_name: data.name,
      phone: data.phone,
      members: data.members,
      attending:
        data.attending === "yes"
          ? "Attending"
          : "Not Attending",
      message: data.message || "No additional message",
    },
    PUBLIC_KEY
  );
};
