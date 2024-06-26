// vite.config.js
/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "about.html"), // Additional HTML pages
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        buynow: resolve(__dirname, "payment.html"),
        signup: resolve(__dirname, "signup.html"),
        
        devloperContact: resolve(__dirname, "developerContact.html"),
        login: resolve(__dirname, "login.html"),
       

        

        

        // Add more entry points for other HTML files as needed
      },
    },
  },
});
