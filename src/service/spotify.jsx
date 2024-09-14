import { useEffect, useState } from "react";

const client_id = 'ee9c87da56354ed0a5841ab0bb27024e'
const client_secret = '41bf8905ec4340008399c52e7ea10e09'
const credentials = btoa(client_id + ':' + client_secret);
export const reqToken = async() =>{
    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + credentials
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials'
        })
    })
    const data = await resp.json()
    return data.access_token
}

export const searchTracks = async(query, token) => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    });
    const data = await response.json()
    //console.log(data.tracks.items[2])
    //console.log(musicData)
    return data.tracks.items
}