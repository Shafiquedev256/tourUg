import axios from "axios";
import { useEffect, useState } from "react";

type Location = {
  location: string;
  category: string;
  title: string;
  duration: string;
  price: string;
  imgs: string[];
  highlights: string;
  description: string;
};

export const useFetchTour = (city: string) => {
  const [tours, setTours] = useState<Location[]>([] as Location[]);
  useEffect(() => {
    const getDestinationTours = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/ugtuors/api/destinations/${city}`
        );
        setTours(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getDestinationTours();
  }, []);

  return { tours };
};
