import { render } from '@testing-library/react';
import React from 'react';
import ErrorPage, { ErrorPageProps } from './ErrorPage';

describe('ErrorPage', () => {
    const defaultProps: ErrorPageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ErrorPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ErrorPage')).toBeTruthy();
    });
});
