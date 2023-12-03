import "../css/app.css";

export const App = () => {
  return (
    <>
      <div className="mt-28"></div>
      <img src="/landingpage1.jpg" className="" />
      <div className="flex justify-center w-full my-5">
        <button className="w-40 border border-black hover:border-red-600 text-black hover:text-red-600 transition duration-300 rounded-full p-3 text-xl">
          Explorar
        </button>
      </div>
      <img src="/landingpage2.png" className="" />
    </>
  );
};
