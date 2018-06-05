import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const InvertColorsPath = () => [
  <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z" key='path0' />,
];

const InvertColorsIcon = styled(Icon).attrs({
  children: InvertColorsPath,
});

export default InvertColorsPath;
export { InvertColorsIcon };
