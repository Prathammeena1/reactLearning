import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../../config/config";


const Home = () => {
  const [page, setpage] = useState(1);
  const [images, setimages] = useState([]);
  const [query, setquery] = useState("nature");

  const getImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page: page,
        per_page: 10,
        client_id: config.UNSPLASH_API_CLIENT_ID, // Replace with your Unsplash API access key
      },
    });

    setimages(response.data.results);

    response.data.results.forEach((e) => {
      console.log(e.alt_description);
      console.log(e);
    });
  };

  // getImages()

  useEffect(() => {
    getImages();
  }, [page]);

  return images.length > 0 ? (
    <div>
      <div className="w-full grid grid-cols-5 grid-rows-2 gap-5">
        {images.map((image) => (
          <div key={image.id} className="imageParent relative h-[36vh] overflow-hidden bg-zinc-800/[.4]">
              <img
                className="h-full w-full object-cover"
                src={image.urls.full}
                alt={image.alt_description}
              />
            <div className="overlay absolute h-full w-full top-0 left-0 bg-zinc-800/[.5] opacity-0 z-[99]">
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-[5vh] text-3xl">
        <span
          onClick={() => page > 1 && setpage(page - 1)}
          className=" hover:text-blue-300 cursor-pointer"
        >
          <i className="ri-arrow-left-s-line"></i>
        </span>
        <span className="mx-10">{page}</span>
        <span
          onClick={() => setpage(page + 1)}
          className=" hover:text-blue-300 cursor-pointer"
        >
          <i className="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default Home;
