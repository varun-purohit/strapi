import { Fa500Px, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";
import sublinks from "../data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`bg-white  fixed top-0 left-0 w-[100%] h-[100%] min-[992px]:hidden  ${
        isSidebarOpen
          ? " opacity-100 visible transition-opacity duration-1000 "
          : "opacity-0 invisible "
      }`}
    >
      <div className="py-16 px-8 relative">
        <button
          onClick={closeSidebar}
          className="absolute text-[2rem] text-indigo-500 top-4 right-4"
        >
          <FaTimes />
        </button>
        <div>
          {sublinks.map((sublink) => {
            const { links, page, pageId } = sublink;
            return (
              <article className="mb-6" key={pageId}>
                <h4 className="text-indigo-700 capitalize text-2xl tracking-[1px] mb-3">
                  {page}
                </h4>
                <div className="grid grid-cols-2 gap-y-1 ">
                  {links.map((link) => {
                    const { id, label, url, icon } = link;
                    return (
                      <a
                        key={id}
                        href={url}
                        className="flex items-center capitalize text-gray-900 gap-4"
                      >
                        <span className="text-gray-500 ">{icon}</span>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
