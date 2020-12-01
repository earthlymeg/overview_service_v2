import React from 'react';

const getTotal = (bag) => {
  let total = 0;

  for (let i = 0; i < bag.length; i++) {
    total += Number(bag[i].price);
  }

  return total;
}

export default getTotal;