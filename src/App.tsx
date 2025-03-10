import "./global.css";
import { AppEnums } from "./enums/App.enums";
import NeoGrid from "./components/Grid";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = AppEnums.TITLE_PAGE;
  }, []);

  return <NeoGrid />;
};

export default App;
