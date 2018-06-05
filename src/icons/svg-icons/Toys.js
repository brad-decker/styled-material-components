import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const ToysPath = () => [
  <path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z" key='path0' />,
];

const ToysIcon = styled(Icon).attrs({
  children: ToysPath,
});

export default ToysPath;
export { ToysIcon };
