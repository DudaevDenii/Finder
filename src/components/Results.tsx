import First from "./First";
import Part from "./Part";
import Search from "./Search";

type result = {
  position: number;
  url: string;
  title: string;
};
type allRes = {
  result: result[] | undefined;
  search: (value: string) => void;
};
function Results({ result, search }: allRes) {
  return (
    <div className="">
      {result !== undefined ? (
        <div className="flex flex-col gap-8 mt-8 mb-8 justify-center items-center">
          <Search search={search} />

          {result.map((el) => (
            <Part title={el.title} url={el.url} key={el.position} />
          ))}
        </div>
      ) : (
        <First search={(value) => search(value)} />
      )}
    </div>
  );
}

export default Results;
