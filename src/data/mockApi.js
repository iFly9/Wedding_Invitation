export function submitRSVP(data) {
  return new Promise((resolve) => {
    console.log("RSVP Submitted:", data);

    setTimeout(() => {
      resolve({
        status: "success",
        message: "RSVP received successfully 🎉",
      });
    }, 1200);
  });
}