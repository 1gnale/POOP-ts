import React from 'react';
import Prototype from '../src/components/prototype/prototype.tsx';

describe('Prototype test', () => {
    it("Prototype should be a React function component", () => {
        const element = <Prototype />;
        expect(React.isValidElement(element)).toBeTruthy(); // Verifica si es un elemento React válido
        expect(typeof Prototype).toBe('function'); // Verifica si Prototype es una función
    });
});