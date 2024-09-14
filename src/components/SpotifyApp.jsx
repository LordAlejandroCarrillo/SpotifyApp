import { useState } from "react"
import { useSpotify } from "../hooks/useSpotify"
export const SpotifyApp = () =>{
    const{handeGetMusic, play, length, musicData, song, ahead, behind, doChange, getSearch} = useSpotify()

    const[req, setReq] = useState('')

    return(
        <>
            <nav class="d-flex navbar bg-body-tertiary fixed-bottom py-3" data-bs-theme="dark">
                <div class="container-fluid">
                    <div class="card mb-3" style={{ maxHeight: "540px", width: "30rem"   }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            {
                                musicData[song] && musicData[song].tinyImage ? (
                                    <div class="img-fluid rounded-start">
                                        <img src={musicData[song].tinyImage} alt="Album cover" style={{width: "8rem"}}/>
                                    </div>
                                  ):(console.log(''))
                            }
                            </div>
                            <div class="col-md-8">
                                {
                                    musicData[song] && musicData[song].nameSong && musicData[song].singer ? (
                                        <div class="card-body">
                                            <h3 class="card-title">{musicData[song].nameSong}</h3>
                                            <p class="card-text">{musicData[song].singer}</p>
                                        </div>
                                    ):(console.log(''))
                                }
                        </div>
                    </div>
                </div>
                            
                            
                <div class="card position-absolute top-50 start-50 translate-middle" style={{ maxHeight: "540px", width: "30rem"   }}>
                <div class="d-flex justify-content-center align-items-center">
                        <button className="page-link btn-success fs-4 align-items-center" type="submit"  onClick={()=>behind()}>
                            <span aria-hidden="true" style={{fontSize: "5rem", color: "gray"}}>&laquo;</span>
                            <h1></h1>
                        </button>
                        <button className="page-link btn-success fs-4 image-button" type="button" onClick={()=>play()} >
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/play-flat.png" style={{width: "4rem"}}/>
                        </button>
                        <button className="page-link btn-success fs-4 align-items-center" type="submit"  onClick={()=>ahead()}>
                            <span aria-hidden="true" style={{fontSize: "5rem", color: "gray"}}>&raquo;</span>
                            <h1></h1>
                        </button>
                    </div>
                </div>
                </div>
            </nav>
            <div>
                {
                    console.log(musicData)
                }
                <nav className="navbar bg-body-tertiary fixed-top shadow-lg p-3 mb-5 bg-body-tertiary"  data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Buscar Musica</a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Music</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <form className="d-flex mt-3" role="search" onSubmit={(e)=>{ getSearch(e,req)}}>
                                    <input className="form-control me-2" type="search" placeholder="Buscar Musica" aria-label="Search"  onChange={(e)=>{setReq(e.target.value)}}/>
                                    <button className="btn-success fs-5" type="submit"  onClick={()=>doChange()}>
                                        Buscar
                                    </button>
                                </form>
                                <br />
                                <br />
                                {

                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        {
                                            musicData[song] && musicData[song].tinyImage ? (
                                                <div class="img-fluid rounded-start">
                                                    <img src={musicData[song].tinyImage} alt="Album cover" style={{width: "6rem"}}/>
                                                </div>
                                              ):(console.log(''))
                                        }
                                        </div>
                                        <div class="col-md-8">
                                                {
                                                    musicData[song] && musicData[song].nameSong && musicData[song].singer ? (
                                                        <div class="card-body">
                                                            <h3 class="card-title">{musicData[song].nameSong}</h3>
                                                            <p class="card-text">{musicData[song].singer}</p>
                                                        </div>
                                                    ):(console.log(''))
                                                }
                                        </div>
                                    </div>


                                }
                            </div>
                        </div>
                    </div>
                </nav>
                <div  style={{position: "relative"}} className="position-relative">
                <img src="https://i.pinimg.com/564x/8e/43/98/8e439829fdb6b9772a5c4558a86f0784.jpg" style={{width: "100%", position: "absolute"}}/>
                {
                    musicData[song] &&
                    <div className="">
                        <br />
                        <br />
                        <br />
                    <img src={musicData[song].bigImage} style={{ height: "45rem", position: "absolute"}} className=""/>
                    </div>
                }
                </div>

            </div>
        </>
    )
}