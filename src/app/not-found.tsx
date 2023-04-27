export default function NotFound() {
  return (
    <div className="min-h-[100vh] bg-black flex flex-col items-center justify-center gap-8">
      <h1 className="text-white text-9xl">404</h1>
      <h2 className="text-white text-4xl xl:text-2xl">
        Oooops! Pagina pe care o cautati nu exista!
      </h2>
      <a href="/">
        <button
          className="bg-[#212529] hover:bg-white hover:text-[#212529] text-white font-bold py-6 px-12 rounded-full transition-all duration-200 text-2xl xl:text-xl"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          Go back home
        </button>
      </a>
    </div>
  );
}
