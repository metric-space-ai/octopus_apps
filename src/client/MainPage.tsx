import "./Main.css";

import { Toaster } from "react-hot-toast";
import Home from "./sections/home";

const MainPage = () => {
  return (
    <>
      <Home />
      <Toaster position="top-right" />
    </>
  );
};
export default MainPage;
