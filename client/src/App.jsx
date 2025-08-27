import Leftbar from "./components/Leftbar";
import Topbar from "./components/Topbar";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="app flex gap-4 w-full">
      <Leftbar />
      <div className="content flex-1 mr-4">
        <Topbar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
