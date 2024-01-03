import "./Main.css";
import Research from "./sections/Research";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  return (
    <>
      <Research />
      <Toaster position="top-right" />
    </>
  );
};
export default MainPage;
