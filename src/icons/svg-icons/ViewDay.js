import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const ViewDayPath = () => [
  <path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z" key='path0' />,
];

const ViewDayIcon = styled(Icon).attrs({
  children: ViewDayPath,
});

export default ViewDayPath;
export { ViewDayIcon };
