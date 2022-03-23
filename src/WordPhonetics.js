import React, { useState } from "react";
import useSound from "use-sound";

export default function WordPhonetics(props) {
  const soundUrl = props.info.phonetics[0].audio;
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <div className="WordPhonetics">
      <h2 className="mt-5 mb-3">{props.info.word}</h2>
      <button onClick={handleClick}>
        <span role="img" aria-label="sound icon">
          {" "}
          <i className="bi bi-volume-up"></i>
        </span>
      </button>
      <em>{props.info.phonetics[0].text}</em>
    </div>
  );
}
