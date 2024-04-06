type Offers = {
  title: string;
  img: string;
  cost: string;
  access: string;
  url: string;
}[];

const offers: Offers = [
  {
    title: "5 Days Murchison Falls Safaris",
    img: "https://www.murchisonfallssafaris.com/wp-content/uploads/2019/05/5-days-murchison.jpg",
    cost: "From $1250 per person (2 People)",
    access:
      "5 days adventure Safari to Murchison falls. Hike to the top of the falls, 2 game viewing drives, Boat cruise onthe Nile, And an  optional Rhino tracking experience at the Ziwa Rhinosanctuary.",
    url: "https://www.murchisonfallssafaris.com/safaris/5-days-murchison-falls-safari/",
  },
  {
    title: "Murchison Falls & white water rafting",
    img: "https://www.murchisonfallssafaris.com/wp-content/uploads/2019/04/5-Days-murchison-and-white-water-rafting.jpg",
    cost: "$900 Per Person when 2",
    access:
      " Visit Murchison Falls national park to for an amazing wildlife safari. Proceed to Jinja, Uganda’s adventure capital for white water rafting.",
    url: "https://www.murchisonfallssafaris.com/safaris/5-days-murchison-falls-and-white-water-rafting/",
  },
  {
    title: "Balloon Safari to Queen Elizabeth",
    img: "https://www.queenelizabethnationalpark.com/wp-content/uploads/2020/07/baloon-safari.jpg",
    cost: "From $500 per person",
    access:
      "African balloon safari adventure begins very early morning and will give you an aerial view of the park as you admire its unique terrain and thousands of animals and flora below you.",
    url: "https://www.queenelizabethparkuganda.com/information/hot-air-ballooning/#:~:text=The%20hot%20air%20balloon%20safari,the%20endless%20ishasha%20plains%20the",
  },
  {
    title: "Track Chimp",
    img: "https://web.archive.org/web/20210603201913im_/https://www.queenelizabethnationalpark.com/wp-content/uploads/2020/07/chimpanzee-kyambura.jpg",
    cost: "From $600 per person",
    access:
      "Chimp tracking expeditions are conducted within the verdant forests of the park and you will get a chance to spend time  with ‘man’s closest living relative’",
    url: "https://www.queenelizabethnationalpark.com/chimpanzee-tracking-uganda.html",
  },
];

export const useSpacialOffers = () => {
  return { offers };
};
