import { render } from '@testing-library/react';
import React from 'react';
import DefaultBoard, { DefaultBoardProps } from './DefaultBoard';

describe('DefaultBoard', () => {
    const defaultProps: DefaultBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<DefaultBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DefaultBoard')).toBeTruthy();
    });
});
