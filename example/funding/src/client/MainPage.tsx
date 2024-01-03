import "./Main.css";
import Funding from "./sections/funding";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  return (
    <>
      <Funding />
      <Toaster position="top-right" />
    </>
  );
};
export default MainPage;
