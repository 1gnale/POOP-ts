import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DesktopCardPoemContainer from '../src/components/desktopCardPoemContainer/DesktopCardPoemContainer.tsx';

describe('DesktopCardPoemContainer', () => {
  it('debe renderizar los títulos de los poemas', () => {
    const mockPoems = [
      { id: 1, title: 'Prueba de Poema 1', text: 'Este es el texto del poema 1.' },
      { id: 2, title: 'Prueba de Poema 2', text: 'Este es el texto del poema 2.' }
    ];

    render(<DesktopCardPoemContainer poems={mockPoems} />);

    mockPoems.forEach(poem => {
      expect(screen.getByText(poem.title)).toBeInTheDocument();
    });
  });
});