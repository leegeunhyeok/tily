/**
 * @jest-environment jsdom
 */
import { render } from 'tests/test-utils';

import Box from '../Box';

const CHILDREN_TEXT = 'CHILDREN_TEXT';

describe('Box', () => {
  it('__snapshot__', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render children elements', () => {
    const { getByText } = render(<Box>{CHILDREN_TEXT}</Box>);
    expect(getByText(CHILDREN_TEXT)).toBeInTheDocument();
  });
});
