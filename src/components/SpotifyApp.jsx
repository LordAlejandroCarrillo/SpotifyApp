import { useSpotify } from "../hooks/useSpotify"
export const SpotifyApp = () =>{
    const{handeGetMusic} = useSpotify()
    useSpotify()
    return(
        <>
            <h1>hola</h1>
            <form className="d-flex mt-3" role="search" >
                    <input value='Inicio' type="submit" className="btn btn-success" onClick={handeGetMusic()}/>
            </form>
        </>
    )
}