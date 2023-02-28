import { render } from '@testing-library/react';
import React from 'react';
import ProjectsCarrosel, { ProjectsCarroselProps } from './ProjectsCarrosel';

describe('ProjectsCarrosel', () => {
    const defaultProps: ProjectsCarroselProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ProjectsCarrosel {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ProjectsCarrosel')).toBeTruthy();
    });
});
