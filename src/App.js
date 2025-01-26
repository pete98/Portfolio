import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <HeroUIProvider>
        <HomePage  />
      </HeroUIProvider>
  );
}

export default App;
