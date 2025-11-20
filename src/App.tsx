import "./App.css";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#FFFBF4]">
      <main className="flex w-full flex-col items-center justify-center px-6 py-12">
        <div className="flex items-center justify-center">
          <img
            src="/J&Y.svg"
            alt="J and Y monogram"
            className="w-64 drop-shadow-sm sm:w-96 md:w-[520px] lg:w-[640px]"
          />
        </div>

        <div className="mt-6">
          <img
            src="/Date.svg"
            alt="Wedding date"
            className="mx-auto w-32 opacity-95 sm:w-40 md:w-48"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
