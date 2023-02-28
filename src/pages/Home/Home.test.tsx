import { render } from '@testing-library/react';
import React from 'react';
import Home, { HomeProps } from './Home';

describe('Home', () => {
    const defaultProps: HomeProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Home {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Home')).toBeTruthy();
    });
});
