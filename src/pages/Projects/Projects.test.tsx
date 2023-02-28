import { render } from '@testing-library/react';
import React from 'react';
import Projects, { ProjectsProps } from './Projects';

describe('Projects', () => {
    const defaultProps: ProjectsProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Projects {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Projects')).toBeTruthy();
    });
});
