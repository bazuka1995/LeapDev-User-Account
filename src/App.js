import { useState } from 'react';

import Navbar from './components/Navbar';
import AccountDetails from './components/AccountDetails';

function App() {
  const [disabled, setDisabled] = useState(true);

  const handleInput = () => {
    setDisabled(!disabled)
  }

  return (
    <div className="app">
      <Navbar handleInput={handleInput} disabled={disabled} />
      <AccountDetails disabled={disabled} />
    </div>
  );
}

export default App;
