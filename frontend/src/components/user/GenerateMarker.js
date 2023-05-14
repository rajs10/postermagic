import React, { useEffect, useState } from "react";
import app_config from "../../config";

const GenerateMarker = () => {
  const { apiUrl } = app_config;

  const [videoList, setVideoList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const fetchImageData = async () => {
    const response = await fetch(
      apiUrl+"/image/getall",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markerName: "marker1",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const fetchVideoData = async () => {
    const response = await fetch(
      apiUrl+"/video/getall",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markerName: "marker1",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchImageData();
    fetchVideoData();
  }, [])
  

  return <div>GenerateMarker</div>;
};

export default GenerateMarker;
