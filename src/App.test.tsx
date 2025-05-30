/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('debe renderizar la navegación y las secciones principales', () => {
    render(<App />);
    // Verifica que existan elementos clave del portafolio
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByText(/sobre mí|about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/proyectos|projects/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contacto|contact/i).length).toBeGreaterThan(0);
  });
}); 