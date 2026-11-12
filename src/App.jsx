
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import InvitationOpening from "./components/InvitationOpening";
import Home from "./pages/Home";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = invitationOpened ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [invitationOpened]);

  return (
    <ThemeProvider>
      <Home />

      {!invitationOpened && (
        <InvitationOpening
          onOpen={() => setInvitationOpened(true)}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
