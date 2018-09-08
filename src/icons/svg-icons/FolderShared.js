import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const FolderSharedPath = () => [
  <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" key='path0' />,
];

const FolderSharedIcon = styled(Icon).attrs({
  children: FolderSharedPath,
})``;

export default FolderSharedPath;
export { FolderSharedIcon };
