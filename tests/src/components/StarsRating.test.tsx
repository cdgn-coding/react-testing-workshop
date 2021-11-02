import React from 'react';
import { render, getByText } from '@testing-library/react';
import StarsRating from '../../../src/components/StarsRating';
import { expect } from 'chai';

describe('Given StarsRating', () => {
    describe('When rendered', () => {
        describe('When rate is 3.9 and count is 120', () => {
            it('Then should show 4 stars', async () => {
                const { container } =  render(<StarsRating rate={3.9} count={400} />);
                expect(container.getElementsByClassName('text-yellow-400').length).to.eq(4);
            })

            it('Then should show rated 120 times message', async () => {
                const { container } =  render(<StarsRating rate={3.9} count={120} />);
                await getByText(container, '120 calificaciones');
            })
        });

        describe('When rate is 3.4 and count is 400', () => {
            it('Then should show 3 stars', async () => {
                const { container } =  render(<StarsRating rate={3.4} count={400} />);
                expect(container.getElementsByClassName('text-yellow-400').length).to.eq(3);
            })

            it('Then should show rated 400 times message', async () => {
                const { container } =  render(<StarsRating rate={3.4} count={400} />);
                await getByText(container, '400 calificaciones');
            })
        });
    });
});
