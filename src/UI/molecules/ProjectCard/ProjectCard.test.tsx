import { render } from '@testing-library/react';
import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

describe('ProjectCard', () => {
    const defaultProps: ProjectCardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ProjectCard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ProjectCard')).toBeTruthy();
    });
});
