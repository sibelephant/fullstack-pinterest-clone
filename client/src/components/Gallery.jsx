import GallleryItem from "./GallleryItem";

//TEMPORARY;
const items = [
  {
    id: 1,
    media: "/Pinterest-clone/pins/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/Pinterest-clone/pins/pin2.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: "/Pinterest-clone/pins/pin3.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: "/Pinterest-clone/pins/pin4.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: "/Pinterest-clone/pins/pin5.jpeg",
    width: 1260,
    height: 1243,
  },
  {
    id: 6,
    media: "/Pinterest-clone/pins/pin6.jpeg",
    width: 1260,
    height: 1568,
  },
  {
    id: 7,
    media: "/Pinterest-clone/pins/pin7.jpeg",
    width: 1260,
    height: 1234,
  },
  {
    id: 8,
    media: "/Pinterest-clone/pins/pin8.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 9,
    media: "/Pinterest-clone/pins/pin9.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 10,
    media: "/Pinterest-clone/pins/pin10.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 11,
    media: "/Pinterest-clone/pins/pin11.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 12,
    media: "/Pinterest-clone/pins/pin12.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 13,
    media: "/Pinterest-clone/pins/pin13.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 14,
    media: "/Pinterest-clone/pins/pin14.jpeg",
    width: 1260,
    height: 1600,
  },
  {
    id: 15,
    media: "/Pinterest-clone/pins/pin15.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 16,
    media: "/Pinterest-clone/pins/pin16.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 17,
    media: "/Pinterest-clone/pins/pin17.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 18,
    media: "/Pinterest-clone/pins/pin18.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 19,
    media: "/Pinterest-clone/pins/pin19.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 20,
    media: "/Pinterest-clone/pins/pin20.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 21,
    media: "/Pinterest-clone/pins/pin21.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 22,
    media: "/Pinterest-clone/pins/pin22.jpeg",
    width: 1260,
    height: 1890,
  },
  {
    id: 23,
    media: "/Pinterest-clone/pins/pin23.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 24,
    media: "/Pinterest-clone/pins/pin24.jpeg",
    width: 1260,
    height: 1260,
  },
  {
    id: 25,
    media: "/Pinterest-clone/pins/pin25.jpeg",
    width: 1260,
    height: 1260,
  },
];
const Gallery = () => {
  return (
    <div className="gallery grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      {items.map((item) => (
        <GallleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
