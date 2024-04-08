import { Link } from "react-router-dom";

export const Explore_pearl = () => {
  return (
    <div className='ml-2 py-4'>
      <h1 className='text-2xl'>Explore the pearl of Africa</h1>
      <div className='flex flex-row py-4 overflow-x-scroll space-x-3 no-scrollbar md:justify-center md:items-center'>
        <Link
          to={"/destination/Nationalparks"}
          className=' w-fit  rounded-md bg-center bg-cover bg-[url("https://www.insidekibaleforestnationalpark.com/wp-content/uploads/2022/07/drive-through-park-1024x495.jpg")]'
        >
          <div className='w-[310px] h-[180px] rounded-md bg-black bg-opacity-40 text-white text-2xl  flex justify-center items-center'>
            <span className='text-center'>National Parks</span>
          </div>
        </Link>
        <Link
          to={
            "/city/tours/From%20Kampala:%20Jinja%20&%20the%20Source%20of%20the%20River%20Nile%20Day%20Trip/Jinja"
          }
          className='w-fit  rounded-md bg-center bg-cover bg-[url("https://www.ugandabudgetsafaris.com/wp-content/uploads/2019/10/source-of-the-niles.jpg")]'
        >
          <div className='w-[310px] h-[180px] rounded-md bg-black bg-opacity-40 text-white text-2xl  flex justify-center items-center'>
            <span className='text-center'>Source Of The Nile</span>
          </div>
        </Link>
        <Link
          to={"/city/tours/Best Full Day Cultural Tour of Kampala/cultural"}
          className=' w-fit  rounded-md bg-center bg-cover bg-[url("https://www.pianupewildlifereserveuganda.com/wp-content/uploads/2021/05/1280px-Monument_at_Uganda_Museum-1000x600-1.jpg")]'
        >
          <div className='w-[310px] h-[180px] rounded-md bg-black bg-opacity-40 text-white text-2xl  flex justify-center items-center'>
            <span className='text-center'>Museum and Cultural Sites</span>
          </div>
        </Link>
        <Link
          to={
            "/city/tours/Lake%20Victoria:%201%20DAY%20TRIP%20TO%20NGAMBA%20ISLAND%20AND%20UWEC%20(ZOO)./Entebbe"
          }
          className=' w-fit  rounded-md bg-center bg-cover bg-[url("https://www.gorilla-tracking-uganda.com/wp-content/uploads/2019/10/lions-in-Entebbe-UWEC-Zoo-1.jpg")]'
        >
          <div className='w-[310px] h-[180px] rounded-md bg-black bg-opacity-40 text-white text-2xl  flex justify-center items-center'>
            <span className='text-center'>Uganda Wild Life Center (Zoo)</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
