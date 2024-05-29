import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [page, setpage] = useState(1);
  const [images, setimages] = useState([]);

  const getImages = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=12`
    );
    setimages(data);
  };

  useEffect(() => {
    getImages();
  }, [page]);

  return images.length > 0 ? (
    <div>
      <div className="w-full flex flex-wrap gap-5">
        {images.map((image) => (
          <div key={image.id} className="h-[14vw] w-[14vw] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={image.download_url}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-5 text-3xl">
        <span
          onClick={() => page > 1 && setpage(page - 1)}
          className=" hover:text-blue-300 cursor-pointer"
        >
          prev
        </span>
        <span className="mx-10">{page}</span>
        <span
          onClick={() => setpage(page + 1)}
          className=" hover:text-blue-300 cursor-pointer"
        >
          next
        </span>
      </div>
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default Home;
