/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './components/Contact';
import '@testing-library/jest-dom';
import es from './i18n/locales/es.json';
import en from './i18n/locales/en.json';

// Mock de emailjs
vi.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: {
    sendForm: vi.fn()
  },
  sendForm: vi.fn()
}));

import emailjs from '@emailjs/browser';

describe('Contact', () => {
  const fillAndSubmitForm = async () => {
    render(<Contact darkMode={false} />);
    fireEvent.change(screen.getByPlaceholderText("John Doe"), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText("john@example.com"), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText("Project | Inquiry"), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText("Tell me about your project or inquiry..."), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar|send/i }));
  };

  it('muestra mensaje de éxito al enviar correctamente', async () => {
    (emailjs.sendForm as any).mockResolvedValueOnce({});
    await fillAndSubmitForm();
    await waitFor(() => {
      expect(
        screen.getByText(
          (content) =>
            content === es.contact.form.success ||
            content === en.contact.form.success
        )
      ).toBeInTheDocument();
    });
  });

  it('muestra mensaje de error si falla el envío', async () => {
    (emailjs.sendForm as any).mockRejectedValueOnce(new Error('fail'));
    await fillAndSubmitForm();
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
}); 