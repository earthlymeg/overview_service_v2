import React from 'react';

const Details = ({ item, style }) => (

  <div>
  {style &&
    <div>
    {/* {console.log(style)} */}
      <small className="text-muted">{item.category}</small>
      <p className="h3">{item.name}</p>
      {style.sale_price > 0 ?
        <div className="justify-content-start">
          <p className="d-inline text-muted" style={{"text-decoration":"line-through"}}>${style.original_price}</p><p className="d-inline ml-2">${style.sale_price}</p>
        </div> :
        <p className="d-inline">${style.original_price}</p>
      }
    </div>
  }
  </div>
);

export default Details;