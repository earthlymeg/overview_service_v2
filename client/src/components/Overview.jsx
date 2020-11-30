import React from 'react';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Details from './Details.jsx';
import Desc from './Desc.jsx';
import Gallery from './Gallery.jsx';
import StyleSelect from './StyleSelect.jsx';
import Rating from './Rating.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import Sharing from './Sharing.jsx';

const Overview = ({ inventory, currentItem, styles, currentStyle, images, ratings, addToBag, handleStyleClick }) => (

  <div>

    {/* START OF CONTAINER */}
    <div className="container">

      {/* TOP ROW */}
      <div className="row">

        {/* TOP-LEFT COL */}
        <div className="col-md-7 d-flex flex-column justify-content-center">

          {/* GALLERY */}
          {inventory ?
            <Gallery images={images} /> :
            <div>nothing here</div>
          }

        </div>

        {/* TOP-RT COL */}
        <div className="col-md-5">

          {/* PRODUCT DETAILS */}
          {inventory ?
            <Details
              item={currentItem}
              style={currentStyle} /> :
            <div>nothing here</div>
          }

          {/* RATING */}
          <div className="row ml-1 mb-3">
            <Rating ratings={ratings} />
          </div>

          {/* STYLE SELECTOR */}
          <div className="row">
            <StyleSelect styles={styles} handleStyleClick={handleStyleClick}/>
          </div>

          {/* BUTTON GROUP */}
          <ButtonGroup
            currentStyle={currentStyle}
            addToBag={addToBag}/>

        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="row mt-2">

          {/* BOT-LEFT COL */}
          <div className="col-md-7">

            {/* PRODUCT DESCRIPTION */}
            {inventory ?
              <Desc item={currentItem} /> :
              <div>nothing here</div>
            }

          </div>

          {/* BOT-RT COL */}
          <div className="col-md-5">

            {/* SHARING LINKS */}
            <Sharing />

          </div>

      </div>

    </div>
    {/* END OF CONTAINER */}

  </div>
)

export default Overview;