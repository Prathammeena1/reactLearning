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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching image: {error.message}</h1>;
  }

  return (
    image && (
      <div className="h-[85vh] overflow-hidden w-fit m-auto">
        <img src={image.urls.full} className="h-full w-full object-cover" alt={image.alt_description} />
      </div>
    )
  );
};

export default Image;
