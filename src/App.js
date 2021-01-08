import React from "react";

import Shipments from "./components/Shipments";

function App() {

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: 'center' }}>
        SHIPMENT DATA
      </h1>
      <Shipments />
    </div>
  );
}

export default App;
