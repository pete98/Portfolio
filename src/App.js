import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";
import NavigationBar from "./components/NavigationBar";
import Sections from "./components/Sections";

function App() {
  return (
    <HeroUIProvider>
      <div id="app" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6 lg:px-8">
          <NavigationBar />
        </div>
        <Sections />
      </div>
    </HeroUIProvider>
  );
}

export default App;
