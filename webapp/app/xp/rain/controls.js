import React from 'react';
import SimpleLink from '@/components/SimpleLink';
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export default function Controls({ audioStarted, handleStartAudio }) {
  return (
    <div className="absolute m-7 z-50">
      <h1 className="text-4xl">RAIN</h1>
      <div className="flex flex-row gap-2">
        <SimpleLink content={{ icon: <AiOutlineHome />, link: '/' }} />
        {/* <button onClick={handleStartAudio} className="btn btn-secondary">
          {audioStarted ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
        </button> */}
      </div>
    </div>
  );
}