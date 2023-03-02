import { render } from '@testing-library/react';
import React from 'react';
import Project, { ProjectProps } from './Project';

describe('Project', () => {
    const defaultProps: ProjectProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Project {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Project')).toBeTruthy();
    });
});
