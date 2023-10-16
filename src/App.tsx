import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results";
type result = {
  position: number;
  url: string;
  title: string;
};
type allRes = {
  results: result[] | undefined;
};
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [result, setResult] = useState<allRes>();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "Your Api key",
      "X-RapidAPI-Host": "Your Api host",
    },
  };
  async function search(link: string) {
    try {
      await fetch(
        `https://google-web-search1.p.rapidapi.com/?query=${link}`,
        options
      )
        .then((res) => res.json())
        .then((res) => setResult(res));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
        <Navbar darkMode={() => setDarkTheme((prev) => !prev)} />
        <Results result={result?.results} search={(value) => search(value)} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
