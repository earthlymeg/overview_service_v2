import React from 'react';

const ButtonGroup = ({ currentStyle, addToBag }) => (

  <div>
    <form>

      {/* SIZES*/}
      <div className="form-group">
        <select className="form-control" id="size">
          <option value="" disabled selected hidden>Size</option>
          {currentStyle &&
            Object.keys(currentStyle.skus).sort((a, b) => a - b).map(sku => {
              if (currentStyle.skus[sku] > 0) {
                return <option value={sku}>{sku}</option>
              }
            })
          }
        </select>
      </div>

      {/* QTY */}
      <div className="form-group">
        <select className="form-control" id="qty">
          <option value="" disabled selected hidden>Qty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* CART/SAVE */}
      <div className="d-flex justify-content-between">
        <div className="btn btn-warning form-control col-9" type="submit" onClick={() => addToBag()}>Add To Bag</div>
        <div className="btn btn-warning form-control col-2">{/* make this conditional depending on whether it's been saved - filled/not filled*/}<i class="far fa-star"></i></div>
      </div>

    </form>
  </div>
)

export default ButtonGroup;