import React from 'react';
import { render } from '@testing-library/react';

import Posts from '.';

describe('<Posts />', () => {
  it('should render post', () => {
    render(<Posts />);
  });
});
