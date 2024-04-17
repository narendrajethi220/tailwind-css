import "./index.css";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "Red" }}>This is First Div</div>
        <div style={{ backgroundColor: "Blue" }}>This is Second Div</div>
        <div style={{ backgroundColor: "Green" }}>This is Third Div</div>
      </div>

      {/* Flex================================>*/}
      <div className="flex justify-center mt-4 ">
        <div className="bg-green-500">This is 1st div.</div>
        <div className="bg-blue-500">This is 2nd div.</div>
        <div className="bg-red-500">This is 3rd div.</div>
      </div>

      {/* Grid===============================> */}
      <div className="grid grid-cols-3 mt-4">
        <div className="bg-red-600 col-span-2">This is 1st</div>
        <div className="bg-blue-600 col-span-1">This is 2nd</div>
        <div className="bg-green-600 col-span-1">This is 3rd</div>
        <div className="bg-green-500 col-span-2">This is 1st div.</div>
        <div className="bg-blue-500 col-span-2">This is 2nd div.</div>
        <div className="bg-red-500 col-span-1">This is 3rd div.</div>
      </div>

      {/* Responsive-working=================> */}
      <div className="bg-cyan-500 mt-4 md:bg-rose-500">
        Hello World! This div will change color once its width reaches equal or
        above md i.e., medium breakpoints(768px).
      </div>

      {/* Responsive Grid ===================> */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 ">
        <div className="bg-rose-600">This is 1st</div>
        <div className="bg-sky-600 ">This is 2nd</div>
        <div className="bg-emerald-600 ">This is 3rd</div>
      </div>
    </>
  );
};

export default App;
