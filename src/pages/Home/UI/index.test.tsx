import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from '.';

jest.mock('@/shared/UI/Counter');

describe('Home', () => {
  it('renders the Home component', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).not.toBeNull();
  });
});
