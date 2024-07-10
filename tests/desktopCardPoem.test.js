import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DesktopCard from '../src/components/desktopCard/DesktopCard.tsx';

describe('DesktopCard', () => {
  it('debe renderizar el título y el texto del poema', () => {
    const title = 'Prueba de Poema';
    const text = 'Este es el texto del poema.';

    render(<DesktopCard title={title}>{text}</DesktopCard>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});