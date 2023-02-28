import { render } from '@testing-library/react';
import React from 'react';
import HomeBanner, { HomeBannerProps } from './HomeBanner';

describe('HomeBanner', () => {
    const defaultProps: HomeBannerProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HomeBanner {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HomeBanner')).toBeTruthy();
    });
});
