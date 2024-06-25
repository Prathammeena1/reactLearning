import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../../config/config";
import { useContext } from "react";
import { datacontext } from "./DataContext";
import { Link, useLocation } from "react-router-dom";



const Home = () => {
  const [page, setpage] = useState(1);
  const {query,setquery,images,setimages} = useContext(datacontext)

  const {search} = useLocation()
  
  
  
  const getImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page: page,
        per_page: 10,
        client_id: config.UNSPLASH_API_CLIENT_ID, // Replace with your Unsplash API access key
      },
    });
    if(response.data.results.length !== 0){
      setimages(response.data.results);
    }else{
      setimages(null)
    }
  };
  
  useEffect(() => {
    if(search.trim() !== ""){
     const category = search.split('=')[1]
     setquery(category)
    }
    if(search.trim() == ""){
      setquery("random")
    }
    console.log(1)
    getImages();
  }, [page,query,search]);

  return images ? (images.length > 0 ? (
    <div>
      <div className="text-5xl capitalize mb-2">{query.split('-').join(' ')}</div>
      <div className="w-full grid grid-cols-2 grid-rows-5 gri md:grid-cols-5 md:grid-rows-2 md:gap-5 gap-3 ">
        {images.map((image) => (
          <Link to={`/image/${image.id}`} key={image.id} className="imageParent relative h-[13vh] md:h-[35vh] overflow-hidden bg-zinc-800/[.4] cursor-pointer">
              <img
                className="h-full w-full object-cover"
                src={image.urls.full}
                alt={image.alt_description}
              />
            <div className="overlay absolute h-full w-full top-0 left-0 bg-zinc-950/[.4] opacity-0 z-[99]">
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-[2vh] text-3xl">
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
  )) : ( <h1>Search Not found</h1> )
};

export default Home;
