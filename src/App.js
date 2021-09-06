import { useState } from "react";

import Navbar from "./components/Navbar";
import AccountDetails from "./components/AccountDetails";

function App() {
  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="app">
      <Navbar />
      <AccountDetails disabled={disabled} handleDisabled={handleDisabled} />
    </div>
  );
}

export default App;
