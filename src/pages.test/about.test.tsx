import { render, screen } from '@testing-library/react';

import Form from '@/pages/form';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Form page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `React-Form-Hooks`', () => {
      render(<Form />);

      const paragraph = screen.getAllByText(/React-Form-Hooks/);

      expect(paragraph).toHaveLength(1);
    });
  });
});
