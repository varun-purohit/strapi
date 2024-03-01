const Hero = () => {
  return (
    <div className="text-white min-h-[calc(100vh-5rem)] grid  place-items-center">
      <div className="w-[90vw] max-w-[1120px] min-[992px]:text-center ">
        <h1 className="text-[clamp(3rem,5vw,5rem)] mb-4 leading-[1.25] font-bold tracking-[1px]">
          Manage Any Content Anywhere
        </h1>
        <p className="leading-[1.5] min-[992px]:max-w-[35em] min-[992px]:mx-auto  ">
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </div>
  );
};

export default Hero;
