/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  //   console.log(totalProductPrice);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
};
