import { render } from '@testing-library/react';
import React from 'react';
import AboutMe, { AboutMeProps } from './AboutMe';

describe('AboutMe', () => {
    const defaultProps: AboutMeProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<AboutMe {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AboutMe')).toBeTruthy();
    });
});
