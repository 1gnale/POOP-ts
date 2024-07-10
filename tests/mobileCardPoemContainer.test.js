import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileCardPoemContainer from '../src/components/mobileCardPoemContainer/MobileCardPoemContainer.tsx';


describe('MobileCardPoemContainer', () => {
  it('debe renderizar el título del poema', () => {
    const mockPoems = [
      { id: 1, title: 'Prueba de Poema', text: 'Este es el texto del poema.' },
    ];

    render(<MobileCardPoemContainer poems={mockPoems} />);

    expect(screen.getByText(mockPoems[0].title)).toBeInTheDocument();
  });
});