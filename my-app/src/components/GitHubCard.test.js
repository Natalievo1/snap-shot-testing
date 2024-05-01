import React from 'react';
import { render } from '@testing-library/react';
import GitHubCard from './GitHubCard';

it('GitHubCard renders correctly', () => {
  const { asFragment } = render(<GitHubCard />);
  expect(asFragment()).toMatchSnapshot();
});
