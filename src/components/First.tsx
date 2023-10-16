import { FormEvent, useState } from "react";

interface Props {
  search: (value: string) => void;
}
function First({ search }: Props) {
  const [input, setInput] = useState<string>("");
  function searchHandler(e: FormEvent) {
    e.preventDefault();
    search(input);
  }
  return (
    <div className="dark:bg-gray-800 h-vh80 flex justify-center items-center flex-col space-y-3 transition-all">
      <div className="font-impact text-6xl md:text-8xl">Finder</div>
      <form
        onSubmit={(e: FormEvent) => searchHandler(e)}
        className="flex space-x-2 flex-wrap justify-center gap-1"
      >
        <input
          type="text"
          className="bg-gray-300 dark:bg-gray-900 w-300px sm:w-80 px-5 focus:outline-none focus:bg-gray-400 py-2 rounded-xl focus:border-0 dark:focus:bg-gray-700 transition-all lg:w-vw50"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-gray-300 dark:bg-gray-900 p-3 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-700 transition-all">
          Search
        </button>
      </form>
    </div>
  );
}

export default First;
