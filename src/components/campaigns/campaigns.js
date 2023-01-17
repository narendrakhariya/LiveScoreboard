import React, { useCallback, useEffect, useState } from "react";
import StreamerList from "../../streamers.json";
import Streamer from "../streamer/streamer";
import "./campaigns.css";

const Campaigns = () => {
  let [streamers, setStreamers] = useState(StreamerList);

  const updateScore = useCallback(() => {
    streamers = streamers.map((streamer) => {
      if (Math.random() > 0.5) return streamer;
      return {
        ...streamer,
        score: streamer.score + Math.floor(Math.random() * streamers.length),
      };
    });
    streamers.sort((a, b) => b.score - a.score);
    setStreamers(streamers);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateScore();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return streamers.map((streamer, index) => {
    return (
      <div key={index}>
        <Streamer {...streamer} index={index + 1} />
      </div>
    );
  });
};

export default Campaigns;
