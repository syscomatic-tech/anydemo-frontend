import { useEffect, useState } from 'react';

const Mp3Player = ({ encodedAudio }) => {
  const [decodedAudio, setDecodedAudio] = useState(null);

  useEffect(() => {
    const decodeAudio = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const decodedData = await audioContext.decodeAudioData(encodedAudio);
      setDecodedAudio(decodedData);
    };

    decodeAudio();
  }, [encodedAudio]);

  useEffect(() => {
    if (decodedAudio) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createBufferSource();
      source.buffer = decodedAudio;
      source.connect(audioContext.destination);
      source.start(0);
    }
  }, [decodedAudio]);

  return null;
};

export default Mp3Player;