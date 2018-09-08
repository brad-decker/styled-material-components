import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const ReplyPath = () => [
  <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" key='path0' />,
];

const ReplyIcon = styled(Icon).attrs({
  children: ReplyPath,
})``;

export default ReplyPath;
export { ReplyIcon };
