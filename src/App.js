import { useContext } from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import NavRoutes from "./Routes/NavRoutes";
import { PostModalContext } from "./contexts/PostModalContext";
import Spinner from "./components/Spinner";
import { Toaster } from "react-hot-toast";

function App() {
  const { showPostSpinner } = useContext(PostModalContext);
  return (
    <div className="app">
      <ScrollToTop />
      <NavRoutes />
      {showPostSpinner && <Spinner />}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 2500 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;
