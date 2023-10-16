interface Props {
  url: string;
  title: string;
}
function Part({ url, title }: Props) {
  return (
    <a href={url} target="_blank">
      <div className=" border-gray-700 dark:border-white bg-gray-200 dark:bg-gray-900 px-5 py-14 text-center hover:bg-gray-400 dark:hover:bg-gray-700 transition-all w-vw90 rounded-3xl">
        <h2>{title}</h2>
      </div>
    </a>
  );
}

export default Part;
