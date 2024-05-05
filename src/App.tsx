import HomePage from "./pages/Home.page";
import Header from "./components/Header";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  /**
   * Add different pages to pages folder and call here
   * If multiple pages, use react router to navigate between pages
   */
  return (
    <>
      <Header />
      <HomePage />
      <ScrollToTopButton />
    </>
  );
}

export default App;
