import { createGlobalStyle } from 'styled-components';

import reset from '@/styles/reset.jsx';
import base from '@/styles/base.jsx';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${base}
`;

export default GlobalStyles;
