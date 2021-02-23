import React from 'react';
import '../styles.css';
  const StyleSelect = ( {styles, handleStyleClick} ) => (

    <div className="container-fluid">
      <div className="row">
        {styles &&
          styles.results.map( style => {
            let img = style.photos[0].thumbnail_url;
            return (
              <div className="col-md-4 col-3 my-2 justify-content-center">
                <div className="thumbnail d-block" onClick={() => handleStyleClick(style)}>
                  <img src={img} alt={style.name} className="img-fluid shadow-lg"
                  style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '125px', 'height': '75px' }}/>
                </div>
                <small className="text-muted text-center">{style.name}</small>
              </div>
            )
          })
        }
      </div>
    </div>

  )
export default StyleSelect;