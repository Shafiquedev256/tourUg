export const SearchBar = () => {
  return (
    <div className='flex flex-row w-[70%] md:w-[50%]   bg-white rounded-md '>
      <input
        type='text'
        className='w-[85%] rounded-l-md outline-none px-2 text-black'
        placeholder='Search by name or location ...'
      />
      <button className='w-[25%] text-sm h-fit rounded-r-md p-3 bg-black font-bold text-center'>
        Search
      </button>
    </div>
  );
};
