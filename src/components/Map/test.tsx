import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map>', () => {
  it('should render without any marker', () => {
    render(<Map />);
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Metrópole',
      slug: 'metropole',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longitude: -50,
      },
    };
    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/metrópole/i)).toBeInTheDocument();
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument();
  });
});
