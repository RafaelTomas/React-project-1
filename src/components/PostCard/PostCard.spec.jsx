import React from 'react';
import { render, screen } from '@testing-library/jest-dom';

import PostCard from '.';

const props = {
  title: 'Rafael',
  body: 'Rafael Image',
  id: 1,
  cover: 'img/Rafael.png',
};

describe('<PostCard/>', () => {
  it('should render PostCard correctly ', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', 'img/Rafael.png');

    expect(screen.getByRole('heading', { name: 'Rafael 1' })).toBeInTheDocument();

    expect(screen.getBytext('Rafael Image')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
