import { useGlobalContext } from "../Context/context";
import sublinks from "../data";

const Submenu = () => {
  const { contextPageId } = useGlobalContext();
  console.log(contextPageId);
  const currentPage = sublinks.find((item) => item.pageId === contextPageId);
  return (
    <div className="hidden min-[992px]:grid">
      <div
        className={` fixed top-24 w-[90vw] max-w-[1120px] bg-white p-8 left-[50%]  translate-x-[-50%] origin-top [perspective:1000px] transition-transform ${
          contextPageId ? "visible opacity-100  " : "invisible opacity-0"
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
