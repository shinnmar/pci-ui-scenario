import { AppEnums } from "./enums/App.enum";
import NeoGrid from "./Grid";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = AppEnums.TITLE_PAGE;
  }, []);

  return <NeoGrid />;
};

export default App;
