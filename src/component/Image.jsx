import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config/config"; // Ensure this path is correct
import axios from "axios";

const Image = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImageById = async (id) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${id}`,
        {
          headers: {
            Authorization: `Client-ID ${config.UNSPLASH_API_CLIENT_ID}`,
          },
        }
      );
      setImage(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchImageById(id);
    }
  }, [id]);


  const downloadImage = async () => {
    try {
      const imageUrl = image.urls.full
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = image.alt_description;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };





  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching image: {error.message}</h1>;
  }

  return (
    image && (
      <div className="h-[85vh] overflow-hidden w-fit m-auto text-center">
        <img
          src={image.urls.full}
          className="h-[90%] w-full object-cover"
          alt={image.alt_description}
        />
        <button onClick={downloadImage} className="bg-blue-500 hover:bg-blue-500/[.7] transition-all ease-in px-5 py-1 rounded-md text-white mt-4 text-md font-medium">Download Image</button>
      </div>
    )
  );
};

export default Image;
