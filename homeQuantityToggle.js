/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  //   console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  //   console.log(productQuantity);

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }


  productQuantity.innerText = quantity;
  console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
