export default function SearchInput() {
  return (
    <div className="hidden border bg-[#EFEFEF] rounded-lg px-6 h-14 lg:flex items-center gap-4 w-[400px] has-[input:focus]:border-primary transition-colors duration-500 ease-out">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M24.7905 24.7916L31.1655 31.1666"
          stroke="#231F20"
          strokeWidth="2.46053"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3326 15.5848C28.3326 8.5432 22.6243 2.83482 15.5826 2.83482C8.54102 2.83482 2.83264 8.5432 2.83264 15.5848C2.83264 22.6265 8.54102 28.3348 15.5826 28.3348C22.6243 28.3348 28.3326 22.6265 28.3326 15.5848Z"
          stroke="#231F20"
          strokeWidth="2.46053"
          strokeLinejoin="round"
        />
      </svg>

      <input
        type="text"
        placeholder="Search Products..."
        className="w-full h-full bg-transparent focus:outline-none pr-4 placeholder:text-[#231F20]"
      />
    </div>
  );
}
