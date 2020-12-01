import React from 'react';

const Gallery = ({ images }) => (

  <div>

    {/* CAROUSEL */}
    <div id="productCarousel"
         className="carousel slide carousel-fade carousel-thumbnails mb-2"
         data-ride="carousel"
         data-interval="10000"
         align="center">

      <div className="carousel-outer">

        <div className="carousel-inner">
          {images &&
            <div className="carousel-item active">
              <img className="d-block w-100" src={images[0].url}
                  style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '500px', 'height': '500px' }}/>
            </div>
          }
          {images &&
            images.slice(1).map( image => {
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={image.url}
                    style={{ 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '500px', 'height': '500px'}}/>
              </div>
            )
            })
          }

        </div>

        {/* Controls */}
        <a class="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev" style={{ 'height': '500px'}} >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>

    </div>

    <div>

      {/* Indicators */}

      {/* THUMBNAIL GALLERY */}
      <div className="d-flex justify-content-around mt-2">

        {images &&
          <li className="list-inline-item" data-slide-to="0"
              data-target="#productCarousel">
            <img className="img-fluid" src={images[0].thumbnail_url}
                  style={{ 'zIndex':'9', 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '50px', 'height': '50px' }} />
          </li>
        }
        {images &&
          images.slice(1).map( image => {
            return (
              <li className="list-inline-item"
                  data-slide-to={images.indexOf(image)} data-target="#productCarousel">
                <img className="img-fluid" src={image.thumbnail_url}
                    style={{ 'zIndex':'2', 'verticalAlign': 'baseline', 'objectFit': 'cover', 'width': '50px', 'height': '50px'}}/>
              </li>
            )
          })
        }

      </div>

    </div>

    {/* MODAL VIEW */}
    {/* <div class="modal fade" id="photoModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div class="modal-body">
            <div id="carouselExample" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={imgUrl} />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    </div> */}

  </div>
)

export default Gallery;