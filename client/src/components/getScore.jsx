import React from 'react';

const getScore = ({ ratings }) => {

  // console.log(ratings)
  let score = 0;
  let total = 0;
  let counter = 0;

  if (ratings !== undefined) {
    for (let rating in ratings) {
      let subtotal = Number(rating) * ratings[rating];
      counter += ratings[rating];
      total += subtotal;
    }

    score = Number((Math.round((total / counter) * 4) / 4).toFixed(2));
  }

  return score;
}

export default getScore;