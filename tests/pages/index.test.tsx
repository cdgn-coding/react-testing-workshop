import React from 'react';
import { render, findByTestId } from '@testing-library/react';
import ProductPage from '../../pages/index';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('https://fakestoreapi.com/products/1', (req, res, ctx) => {
      return res(ctx.json({"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}))
    }),
  )
  

describe('Given ProductPage', () => {
    describe('When the user visits the Page', () => {
        before(() => {
            server.listen();
        });

        after(() => {
            server.close();
        });

        it('Then should show the product image', async () => {
            const { container } = render(<ProductPage />)
            await findByTestId(container, "product-image");
        });
    
        it('Then should show the ratings of the product', async () => {
            const { container } = render(<ProductPage />)
            await findByTestId(container, "product-stars-rating");
        });

        it('Then should show the title of the product', async () => {
            const { container } = render(<ProductPage />)
            await findByTestId(container, "product-title");
        });

        it('Then should show the product description', async () => {
            const { container } = render(<ProductPage />)
            await findByTestId(container, "product-description");
        });
    });
});
