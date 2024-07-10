import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileCard from '../src/components/mobileCard/mobileCard.tsx';

describe('MobileCard', () => {
  it('debe renderizar el título del poema', () => {
    const title = 'Prueba de Poema';
    const text = 'Este es el texto del poema.';

    render(<MobileCard title={title}>{text}</MobileCard>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});