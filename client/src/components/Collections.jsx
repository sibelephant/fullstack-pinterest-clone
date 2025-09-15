import GallleryItem from "./GallleryItem";

// TEMP mock data; replace with API data when available
const mockPins = [
  { id: 1, media: "/Pinterest-clone/pins/pin1.jpeg", height: 320 },
  { id: 2, media: "/Pinterest-clone/pins/pin2.jpeg", height: 260 },
  { id: 3, media: "/Pinterest-clone/pins/pin3.jpeg", height: 380 },
  { id: 4, media: "/Pinterest-clone/pins/pin4.jpeg", height: 300 },
  { id: 5, media: "/Pinterest-clone/pins/pin5.jpeg", height: 340 },
  { id: 6, media: "/Pinterest-clone/pins/pin6.jpeg", height: 280 },
  { id: 7, media: "/Pinterest-clone/pins/pin7.jpeg", height: 360 },
  { id: 8, media: "/Pinterest-clone/pins/pin8.jpeg", height: 300 },
];

const Collections = () => {
  return (
    <div className="collections grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {mockPins.map((item) => (
        <GallleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Collections;
