import { render } from '@testing-library/react';
import React from 'react';
import HomeLogo, { HomeLogoProps } from './HomeLogo';

describe('HomeLogo', () => {
    const defaultProps: HomeLogoProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HomeLogo {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HomeLogo')).toBeTruthy();
    });
});
