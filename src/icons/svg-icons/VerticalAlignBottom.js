import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const VerticalAlignBottomPath = () => [
  <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" key='path0' />,
];

const VerticalAlignBottomIcon = styled(Icon).attrs({
  children: VerticalAlignBottomPath,
});

export default VerticalAlignBottomPath;
export { VerticalAlignBottomIcon };
