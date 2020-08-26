import React from 'react';

function Collections(props){
    // console.log(props);
    return(
    <>
     <div className="favSeries"> 
      <div className="series">
        <img src={props.imgSrc} alt="Reload" className="series_img"/>
        <div className="serie_info">
          <span className="serie_category">{props.title}</span>
          <h3 className="serie_title">{props.SerieName}</h3>
           <a href={props.link} target="_blank">
              <button>Watch Now</button>
           </a>
        </div>
      </div>
     </div>
    </>
    );
}
export default Collections;

