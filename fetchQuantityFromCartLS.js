/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price };
};

