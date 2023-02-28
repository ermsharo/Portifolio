import { render } from '@testing-library/react';
import React from 'react';
import ProjectsBoard, { ProjectsBoardProps } from './ProjectsBoard';

describe('ProjectsBoard', () => {
    const defaultProps: ProjectsBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ProjectsBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ProjectsBoard')).toBeTruthy();
    });
});
