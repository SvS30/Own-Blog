/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import i18n from './i18n';

const renderWithLang = async (lang: string) => {
  await i18n.changeLanguage(lang);
  render(<App />);
};

describe('Internacionalización global', () => {
  it('muestra los textos en inglés por defecto', async () => {
    await renderWithLang('en');
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/projects/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
  });

  it('muestra los textos en español al cambiar el idioma', async () => {
    await renderWithLang('es');
    expect(screen.getAllByText(/sobre mí/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/proyectos/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contacto/i).length).toBeGreaterThan(0);
  });
}); 