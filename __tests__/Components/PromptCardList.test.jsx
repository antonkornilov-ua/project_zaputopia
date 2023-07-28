import { render } from '@testing-library/react';
import PromptCardList from '@/Components/PromptCardList';

test('renders prompt card list without errors', () => {
  const { container } = render(<PromptCardList data={[]} handleTagClick={() => {}} />);

  expect(container).toBeTruthy();
});