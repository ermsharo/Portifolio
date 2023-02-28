import { render } from '@testing-library/react';
import React from 'react';
import Contact, { ContactProps } from './Contact';

describe('Contact', () => {
    const defaultProps: ContactProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Contact {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Contact')).toBeTruthy();
    });
});
