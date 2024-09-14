import { useEffect, useState } from "react";
import { reqToken, searchTracks,  } from "../service/spotify";
export const useSpotify = () =>{
    
    const[token, setToken] = useState(null)
    const[musicData, setData] = useState([])
    const[songs, setSongs] = useState()
    const[length, setLength] = useState()
    const[audio, setAudio] = useState()
    const[song, setSong] = useState()
    const[change, setChange] = useState()
    console.log(token)
    useEffect(()=>{
        reqToken().then((data)=>{
            setToken(data)
        })
    },[])
    const getSearch= (e,clientRequest) =>{
            searchTracks(clientRequest,token).then((data)=>{
                console.log(data)
                setSongs(data)
            })
    }

    let next=0
    console.log(songs)

    useEffect(()=>{
        if (songs != null) {
            let count = -1
            const validSongs = songs.filter(song => song.preview_url)
            const songData = validSongs.map(({ preview_url, name, artists, album}) => (count++,{
                    nameSong: name,
                    preview: preview_url,
                    singer: artists[0].name,
                    bigImage: album.images[0].url,
                    tinyImage: album.images[1].url,
                    num: count
            }))
            setData(songData)
            setLength(validSongs.length)
        }
    },[songs])

    const doChange = (num) => {
        setChange((prevChange) => {
            if (prevChange == null) {
                return num = 0
            } else {
                return prevChange
            }
        })
    }
    const currentSong = musicData[change] || null
    useEffect(()=>{
        if (currentSong && currentSong.preview) {
            setSong(currentSong.num)
            if (audio) {
                audio.pause();
            }
            const a = new Audio(musicData[change].preview)
            a.pause()
            console.log(next)
            if(next == 1){
                audio.play()
            }
            setAudio(a)
        }
    },[currentSong])

    console.log(song)
    let playPause = 1 
    const handeGetMusic = () =>{
        console.log(audio)
        playPause == 1 &&
        audio.play()
        playPause == -1 &&
        audio.pause()
        playPause = playPause*-1
        console.log(playPause)
        audio.addEventListener('ended', () => {
            playPause = 1
            ahead()
            next = 1
            console.log(next)

        })
    }


    const ahead = () => {
        setChange((prevChange) => {
            if (prevChange < musicData.length - 1) {
                return prevChange +1
            } else {
                return prevChange
            }
        })
    }

    const behind = () => {
        setChange((prevChange) => {
            if (prevChange > 0) {
                console.log(prevChange)
                return prevChange - 1
            } else {
                return prevChange
            }
        })
    }
    const play = async()=>{
        handeGetMusic()
    }
    
    return {
        handeGetMusic,
        play,
        musicData,
        length,
        song,
        ahead,
        behind,
        doChange,
        getSearch
    }
}