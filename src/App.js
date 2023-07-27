import "./App.css";
import ScrollToTop from "./components/scroll-Top/ScrollTop";

import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <AdminHome /> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
