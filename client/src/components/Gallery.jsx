import GallleryItem from "./GallleryItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// no local temp items; data comes from API

const fetchPins = async () => {
  const base = import.meta.env.VITE_API_ENDPOINT?.replace(/\/$/, "") || "";
  const res = await axios.get(`${base}/pin`);
  return res.data;
};

const Gallery = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["pins"],
    queryFn: fetchPins,
  });
  if (error) return "An error occured" + error.message;
  if (isPending) return "Loading.....";
  console.log(data);

  return (
    <div className="gallery grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      {data?.map((item) => (
        <GallleryItem key={item._id || item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
