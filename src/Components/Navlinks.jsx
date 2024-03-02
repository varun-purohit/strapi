import { useGlobalContext } from "../Context/context";
import sublinks from "../data";

const NavLinks = () => {
  const { setContextPageId } = useGlobalContext();

  return (
    <div className="hidden min-[992px]:flex min-[992px]:justify-center min-[992px]:self-stretch">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <button
            className="link text-white capitalize text-xl px-4 tracking-[1px]"
            key={pageId}
            onMouseEnter={() => {
              setContextPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
