import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const FormatAlignRightPath = () => [
  <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" key='path0' />,
];

const FormatAlignRightIcon = styled(Icon).attrs({
  children: FormatAlignRightPath,
});

export default FormatAlignRightPath;
export { FormatAlignRightIcon };
