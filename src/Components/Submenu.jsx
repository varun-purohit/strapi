import { useRef } from "react";
import { useGlobalContext } from "../Context/context";
import sublinks from "../data";

const Submenu = () => {
  const { contextPageId, setContextPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === contextPageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientY > bottom - 1 || clientX > right - 1) {
      setContextPageId(null);
    }
  };

  return (
    <div className="hidden min-[992px]:grid">
      <div
        onMouseLeave={handleMouseLeave}
        ref={submenuContainer}
        className={` fixed top-24 w-[90vw] max-w-[1120px] bg-white p-8 left-[50%]  translate-x-[-50%] origin-top [perspective:1000px] transition-transform -z-10 ${
          contextPageId ? "visible opacity-100 z-10 " : "invisible opacity-0"
        }`}
      >
        <h5 className="capitalize text-indigo-700 text-xl">
          {currentPage?.page}
        </h5>
        <div
          className={` grid ${
            currentPage?.links?.length > 3 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {currentPage?.links?.map((link) => {
            const { id, url, icon, label } = link;
            return (
              <a
                key={id}
                href={url}
                className="flex items-center text-gray-900 capitalize gap-4"
              >
                <span className="text-gray-500">{icon}</span>
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
