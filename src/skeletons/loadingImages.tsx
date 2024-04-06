export const LoadingImages = () => {
  return (
    <div>
      <div className='hidden md:block md:w-screen md:h-[15rem]'>
        <div className='flex flex-row h-[65vh] p-6 space-x-1'>
          <div className='w-screen p-2 bg-gray-200 animate-pulse h-[100%]'></div>

          <div className='flex flex-col w-2/5 h-1/2] justify-between space-y-1'>
            <div className='h-[50%] w-[100%] '></div>
            <div className='flex flex-row h-1/2 w-[100%] space-x-1'>
              <div className='w-2/4'></div>
              <div className='w-2/4 '></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
