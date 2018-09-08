import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const DonePath = () => [
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" key='path0' />,
];

const DoneIcon = styled(Icon).attrs({
  children: DonePath,
})``;

export default DonePath;
export { DoneIcon };
