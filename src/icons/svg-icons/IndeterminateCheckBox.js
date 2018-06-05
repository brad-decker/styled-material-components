import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const IndeterminateCheckBoxPath = () => [
  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" key='path0' />,
];

const IndeterminateCheckBoxIcon = styled(Icon).attrs({
  children: IndeterminateCheckBoxPath,
});

export default IndeterminateCheckBoxPath;
export { IndeterminateCheckBoxIcon };
