import React, { useState, useEffect, useLayoutEffect } from 'react';
import "../css/voice.css"
const VoiceChat = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect', count);
  }, [count]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect', count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='.voice-chat'>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default VoiceChat
