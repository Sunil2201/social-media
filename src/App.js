import { useContext } from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import NavRoutes from "./Routes/NavRoutes";
import { PostModalContext } from "./contexts/PostModalContext";
import Spinner from "./components/Spinner";

function App() {
  const { showPostSpinner } = useContext(PostModalContext);
  return (
    <div className="app">
      <ScrollToTop />
      <NavRoutes />
      {showPostSpinner && <Spinner />}
    </div>
  );
}

export default App;
