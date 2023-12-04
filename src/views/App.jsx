import "../css/app.css";

export const App = () => {
  return (
    <>
      <div className="mt-32"></div>
      <img src="/landingpage1.jpg" className="w-[70rem] m-auto" />
      <div className="flex justify-center w-full my-5">
        <button className="w-40 border border-black hover:border-red-600 text-black hover:text-red-600 transition duration-300 rounded-full p-3 text-xl">
          Explorar
        </button>
      </div>
      <div className="w-screen">
        <div className="flex justify-center w-full my-5">
          <button className=" w-40 border border-neutral-100 hover:border-white text-neutral-100 hover:text-white hover:bg-neutral-400 hover:bg-opacity-25 transition duration-300 rounded-full p-3 text-xl absolute z-50 mt-[38rem]">
            Personalizar
          </button>
          <img src="/landingpage2.png" className="" />
        </div>
      </div>
      <img src="/modellandingpage.png" className="w-screen"/>
    </>
  );
};
