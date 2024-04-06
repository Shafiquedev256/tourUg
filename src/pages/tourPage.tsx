import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useFetchTour } from "../hooks/fetchTour";
import { useState } from "react";
import { AgentAvailable } from "../components/agentsCard";

const Tour_page = () => {
  const { tour, city } = useParams();
  const { tours } = useFetchTour(city || "");
  const [opemImg, setOpenImg] = useState(false);
  const filter = tours.filter((item) => item.title == tour);
  return (
    <>
      {filter[0] && (
        <div>
          <div>
            <div className='bg-black'>
              <Navbar />
            </div>
            <div className='bg-gray-100 bg-opacity-75 p-3'>{`Home/city/tours/${tour}`}</div>
          </div>
          <div className='p-3'>
            <span className='font-bold text-sm text-gray-600 uppercase'>
              {filter[0].category}
            </span>
            <p className='text-3xl font-bold  text-gray-700 title'>
              {filter[0].title}
            </p>
          </div>
          <div
            className={`${opemImg ? "md:fixed md:z-40 md:top-0 md:pt-4 md:w-screen md:h-screen md:bg-black md:bg-opacity-70 md:p-14" : "md:hidden"}`}
          >
            <div
              className='md:font-bold md:text-2xl md:text-right md:m-6  md:text-white md:block hidden'
              onClick={() => setOpenImg(false)}
            >
              Close
            </div>
            <Slide cssClass=''>
              {filter[0].imgs.map((item) => (
                <div className='h-[18rem] md:h-[36rem]' key={item}>
                  <img
                    className='bg-center bg-cover flex item-center justify-center h-[100%] w-[100%]'
                    src={item}
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className='hidden md:block' onClick={() => setOpenImg(true)}>
            <div className='flex flex-row h-[65vh] p-6 space-x-1'>
              <div className='w-3/5 h-[100%]'>
                <img src={filter[0].imgs[0]} className='w-[100%] h-[100%]' />
              </div>

              <div className='flex flex-col w-2/5 h-1/2] justify-between space-y-1'>
                <img src={filter[0].imgs[1]} className='h-[50%] w-[100%] ' />
                <div className='flex flex-row h-1/2 w-[100%] space-x-1'>
                  <img src={filter[0].imgs[2]} className='w-2/4' />
                  <img src={filter[0].imgs[3]} className='w-2/4 ' />
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex md:flex-row md:justify-evenly'>
            <div className='p-3 space-y-3 md:w-3/5'>
              <div className='text-2xl text-gray-600 my-2'>Experience</div>
              <div className='flex flex-row space-x-3 items-center '>
                <div className='font-bold text-sm text-gray-500'>
                  Highlights
                </div>
                <p className='bg-gray-100 rounded p-2 w-fit'>
                  {filter[0].highlights}
                </p>
              </div>
              <div className='flex flex-col md:flex-row space-x-3 items-center '>
                <div className='font-bold text-sm text-gray-500'>
                  Full description
                </div>
                <p className='md:border-t-[1px] md:border-b-[1px]  p-2 space-x-2 md:w-fit'>
                  {filter[0].description}
                </p>
              </div>
            </div>
            <div className='flex flex-col md:mr-5'>
              <div className='flex flex-col space-x-2 border-2 p-3 w-fit h-fit border-t-blue-500 border-t-4 m-2'>
                <div className='font-bold text-2xl w-fit text-gray-600'>
                  {filter[0].price}
                </div>
                <Link
                  to={"#"}
                  className='font-bold tect-center w-fit rounded-full bg-blue-500 text-white p-2'
                >
                  Contact Agent
                </Link>
              </div>
              <AgentAvailable />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Tour_page;
