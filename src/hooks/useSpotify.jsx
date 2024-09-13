import { useEffect, useState } from "react";
import { reqToken, searchTracks,  } from "../service/spotify";
export const useSpotify = () =>{
    const[token, setToken] = useState()
    const[musicData, setData] = useState()
    useEffect(()=>{
        reqToken().then((data)=>{
            setToken(data)
        })
    },[])
    
    console.log(token)

    const loadMusicData = () =>{
        useEffect(()=>{
            searchTracks('bones',token).then((data)=>{
                setData(data.song)
            })
        },[])

    }
    const handeGetMusic = (e) =>{
        console.log('hola')
        loadMusicData()
        console.log(musicData)
        const audio = new Audio(musicData);
        audio.play()
    }

    return {
        handeGetMusic
    }
}