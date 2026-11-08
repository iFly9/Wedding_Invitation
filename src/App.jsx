
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import InvitationOpening from "./components/InvitationOpening";
import Home from "./pages/Home";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <ThemeProvider>
      {!invitationOpened ? (
        <InvitationOpening
          onOpen={() => setInvitationOpened(true)}
        />
      ) : (
        <Home />
      )}
    </ThemeProvider>
  );
}

export default App;
