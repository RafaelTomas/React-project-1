import React from 'react';
import { render, screen } from '@testing-library/react';

import PostCard from ".";
import { propsPostCard } from './mock';

const props = propsPostCard

describe('<PostCard/>',() => {
    it('should render PostCArd correctly ', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: props.title }))
          .toHaveAttribute('src', 'img/Rafael.png');
        
          expect(screen.getByRole('heading', { name: 'Rafael 1' }))
            .toBeInTheDocument();
        
            expect(screen.getBytext('Rafael Image'))
            .toBeInTheDocument();
    });

    

})