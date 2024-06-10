/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};
