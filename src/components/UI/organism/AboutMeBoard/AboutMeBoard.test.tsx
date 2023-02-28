import { render } from '@testing-library/react';
import React from 'react';
import AboutMeBoard, { AboutMeBoardProps } from './AboutMeBoard';

describe('AboutMeBoard', () => {
    const defaultProps: AboutMeBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<AboutMeBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AboutMeBoard')).toBeTruthy();
    });
});
