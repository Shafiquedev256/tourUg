import { SearchBar } from "./searchBar";

export const Header = () => {
  return (
    <div className=" w-screen  bg-cover bg-center bg-no-repeat bg-fixed bg-[url('https://ugandawildlife.org/wp-content/uploads/2022/05/murchison-falls.webp')]  ">
      <div className='h-[20rem] md:h-[25rem] text-white flex flex-col justify-center items-center space-y-5 bg-[#007500] bg-opacity-40'>
        <h1 className=' text-3xl text-center'>Find Your Next Adventure</h1>
        <SearchBar />
      </div>
    </div>
  );
};
