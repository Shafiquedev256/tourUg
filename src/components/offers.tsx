import { Link } from "react-router-dom";
import { useSpacialOffers } from "../hooks/spacialOffers";

type Props = {
  offer: {
    title: string;
    img: string;
    cost: string;
    access: string;
    url: string;
  };
};

const OfferCard = ({ offer }: Props) => {
  return (
    <Link to={offer.url} className=' rounded-md flex flex-col w-[310px]'>
      <img src={offer.img} className='w-[100%] h-[180px] rounded-t-md ' />
      <div className='shadow-md rounded-b-md p-2'>
        <div className='font-bold text-sm '>{offer.title}</div>
        <div className=' text-sm text-green-700 py-1'>{offer.cost}</div>
        <p className='text-sm w-[300px] h-[90px]'>{offer.access}</p>
      </div>
    </Link>
  );
};

export const Offers = () => {
  const { offers } = useSpacialOffers();
  return (
    <div className='ml-2 py-4'>
      <h1 className='text-2xl'>Special Offers</h1>
      <div className='flex flex-row md:justify-center md:items-center py-4 overflow-x-scroll space-x-3 no-scrollbar'>
        {offers.map((item) => (
          <OfferCard offer={item} key={item.url} />
        ))}
      </div>
    </div>
  );
};
