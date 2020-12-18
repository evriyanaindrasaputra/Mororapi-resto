import { Menu } from "../../components";
import { menuObj } from "./Data";
const HomePage = () => {
  return (
    <>
      <Menu {...menuObj} />
    </>
  );
};

export default HomePage;
