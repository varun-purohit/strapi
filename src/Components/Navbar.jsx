import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="h-[5rem] flex items-center justify-center ">
      <div className=" flex justify-between w-[90vw] max-w-[1120px] min-[992px]:grid min-[992px]:grid-cols-[auto_1fr] ">
        <h3 className="text-3xl text-white tracking-[2px] font-bold">
          {" "}
          strapi
        </h3>
        <button
          onClick={openSidebar}
          className="bg-white p-2 rounded text-[#6366f1] transition-all duration-300 hover:scale-[1.05] min-[992px]:hidden"
        >
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
