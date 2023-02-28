import { render } from '@testing-library/react';
import React from 'react';
import HomeBoard, { HomeBoardProps } from './HomeBoard';

describe('HomeBoard', () => {
    const defaultProps: HomeBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<HomeBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HomeBoard')).toBeTruthy();
    });
});
