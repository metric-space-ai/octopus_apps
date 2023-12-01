import "./Main.css";
import { Consultant } from "./sections/consultant";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  return (
    <>
      <Consultant />
      <Toaster position="top-right" />
    </>
  );
};
export default MainPage;
