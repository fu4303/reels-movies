import React from 'react'
import {img_api} from '../../../../Api/axios';
import '../Cast/Credits.css'

function Crew(credits) {

    return (
     
        credits.crew.length !== 0 ?

        <div className="movieDetails__credits movieDetails__creditsCrew">
            <h2 className="movieDetails__credits__title">Crew</h2>
            <div className="movieDetails__credits__profile">
            {credits.crew && credits.crew
                .filter(credit=>{return credit?.profile_path !== null || "" || undefined})
                .slice(0,6)
                .map(credit=>{
                return (
                    <div className="movieDetails__credits__card" key={credit.id}> {/*maps over credits array and renders first 4 actors*/}
                        <img className="movieDetails__credits__images" src={img_api.poster + credit?.profile_path} alt={credit?.name}/>
                        <div className="movieDetails__credits__text">
                            <p className="movieDetails__credits__name">{credit?.name || credit?.original_name}</p>
                            <p>{credit?.job}</p>
                        </div>
                    </div>
                )
            })}
            </div>  
        </div> 
        
        : <div></div>
    )
}

export default Crew
