import React from 'react';

const Desc = ( {item} ) => (
  <div>
    <h5>{item.slogan}</h5>
    <p className="mt-3">{item.description}</p>
  </div>
);

export default Desc;