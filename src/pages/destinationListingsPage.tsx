import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SearchBar } from "../components/searchBar";
import { AgentAvailable } from "../components/agentsCard";
import { Link, useParams } from "react-router-dom";
import { useFetchTour } from "../hooks/fetchTour";

const DestinationListingsPage = () => {
  const { city } = useParams();
  const { tours } = useFetchTour(city || "");
  if (city) {
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center py-2 justify-center bg-[#007500] text-white'>
        <SearchBar />
      </div>
      <div className='bg-gray-100 font-bold  p-3 my-3'>
        Results for {city} Tours
      </div>
      <div className='flex md:flex-row md:justify-normal md:items-start  md:relative flex-col-reverse justify-center items-center'>
        <div className='md:w-1/5 md:[h-screen] md:px-6'>
          <AgentAvailable />
        </div>
        <div className='md:w-4/5  md:my-2 overflow-y-scroll no-scrollbar'>
          <div className='py-6  mx-3 flex flex-col justify-evenly space-y-3'>
            {tours &&
              tours.map((item) => {
                return (
                  <Link
                    to={`/city/tours/${item.title}/${item.location}`}
                    key={item.title}
                    className='flex  flex-col md:flex-row w-fit md:w-[100%] rounded-md md:border-[1px] p-1 items-center'
                  >
                    <div className='w-[310px] md:w-[340px] h-[220px]'>
                      <img
                        src={item.imgs[0]}
                        className='w-[100%] h-[100%] rounded-t-md rounded-b-0 md:rounded-md'
                      />
                    </div>

                    <div className='h-[180px] flex flex-col spacey-3 md:ml-4 p-2 w-[310px] md:w-[100%] md:border-0 border-x-[1px] border-b-[1px] rounded-b-md'>
                      <span className='font-bold text-sm text-gray-800'>
                        {item.category}
                      </span>
                      <h1 className='md:text-2xl text-[17px]'>{item.title}</h1>
                      <div className='text-green-500'>{item.price}</div>
                      <span className='font-bold text-sm text-gray-500'>
                        Live tour guide
                      </span>
                      <div className='text-gray-500'>English</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <div className='bg-gray-900'>
        <Footer />
      </div>
    </>
  );
};

export default DestinationListingsPage;
