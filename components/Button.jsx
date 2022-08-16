export default ({ content, className, onClick }) => (
  <button
    onClick={onClick}
    className={`w-[max-content]  rounded-[4rem] border-none text-white text-[1.1rem] cursor-pointer bg-themeRed ${className}`}
  >
    {content}
  </button>
);
