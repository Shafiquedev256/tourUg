import { Link } from "react-router-dom";

export const PorpularDestinations = () => {
  return (
    <div className='ml-2 py-4'>
      <h1 className='text-2xl'>Porpular Destinations</h1>
      <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 '>
        <div className='flex flex-col space-y-2 justify-center items-center m-2'>
          <div className='flex flex-row w-fit rounded-md  bg-[#007500] bg-opacity-5'>
            <img
              src='https://i0.wp.com/www.gorillasafariexperts.com/wp-content/uploads/2022/04/Tourist-Attractions-in-Jinja-Activities-to-do-on-tour.jpg?resize=945%2C480&ssl=1'
              className='w-[200px]  md:w-[240px] h-[110px] md:h-[150px] rounded-r-lg rounded-l-md'
            />
            <div className='flex flex-col space-y-4 w-[200px] justify-center items-center p-3 rounded-sm '>
              <h1 className='font-bold text-center'>Jinja</h1>
              <Link
                to={"/destination/Jinja"}
                className='bg-black w-fit text-white text-center rounded p-2 text-sm font-bold'
              >
                See Details
              </Link>
            </div>
          </div>
          <div className='flex flex-row-reverse w-fit rounded-md  bg-[#007500] bg-opacity-5'>
            <img
              src='https://petnahafricatours.com/wp-content/uploads/2020/05/biharwe-hill.jpg'
              className='w-[200px] md:w-[240px] h-[110px] md:h-[150px] rounded-r-lg rounded-l-md'
            />
            <div className='flex flex-col space-y-4 w-[200px] justify-center items-center p-3 rounded-sm '>
              <h1 className='font-bold text-center'>Mbarara</h1>
              <Link
                to={"/destination/Mbarara"}
                className='bg-black w-fit text-white text-center rounded p-2 text-sm font-bold'
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-2 justify-center items-center'>
          <div className='flex flex-row w-fit rounded-md  bg-[#007500] bg-opacity-5'>
            <img
              src='https://www.africanpearlsafaris.com/wp-content/uploads/2020/12/semuliki-sempaya-hotsprings.jpg'
              className='w-[200px] md:w-[240px] h-[110px] md:h-[150px] rounded-r-lg rounded-l-md'
            />
            <div className='flex flex-col space-y-4 w-[200px] justify-center items-center p-3 rounded-sm '>
              <h1 className='font-bold text-center'>Fort Portal</h1>
              <Link
                to={"/destination/Fort Portal"}
                className='bg-black w-fit text-white text-center rounded p-2 text-sm font-bold'
              >
                See Details
              </Link>
            </div>
          </div>
          <div className='flex flex-row-reverse w-fit rounded-md  bg-[#007500] bg-opacity-5'>
            <img
              src='https://www.independent.co.ug/wp-content/uploads/2019/10/entebbe-wildlife-education-centre.jpg'
              className='w-[200px] md:w-[240px] h-[110px] md:h-[150px] rounded-r-lg rounded-l-md'
            />
            <div className='flex flex-col space-y-4 w-[200px] justify-center items-center p-3 rounded-sm '>
              <h1 className='font-bold text-center'>Entebbe</h1>
              <Link
                to={"/destination/Entebbe"}
                className='bg-black w-fit text-white text-center rounded p-2 text-sm font-bold'
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
