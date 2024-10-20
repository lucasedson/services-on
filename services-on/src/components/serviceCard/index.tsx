import { BiPlay, BiStop, BiPause, } from "react-icons/bi"
import { MdSettings } from "react-icons/md";
import { useState, useEffect } from "react"




export default function ServiceCard(props: any) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    }



    return (
        <div className="flex flex-row w-full justify-between bg-[rgba(0,0,0,0.2)] rounded-lg m-2 p-2">
            <div>
                <h1 className="text-1xl font-bold text-[var(--primary-color)]">{props.title}</h1>
                <p className="text-sm text-gray-500">{props.description}</p>
                <h2 className="font-bold text-sm text-gray-400">Status: {props.status}</h2>

            </div>
            <div>
               <div className="flex flex-row">
                {isPlaying ? <BiPause className="text-3xl cursor-pointer text-[var(--primary-color)]" onClick={handlePlay}/> : <BiPlay className="text-3xl cursor-pointer text-green-300"  onClick={handlePlay}/>}

                <MdSettings className="text-2xl mt-0.5 cursor-pointer text-gray-400" />

               </div>   
            </div>  
        </div>
    )
}