import React from 'react';
import { Icon } from '../icons';
import styled from 'styled-components';

const SignalWifi1BarPath = () => [
  <path fillOpacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" key='path0' />,
  <path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z" key='path1' />,
];

const SignalWifi1BarIcon = styled(Icon).attrs({
  children: SignalWifi1BarPath,
})``;

export default SignalWifi1BarPath;
export { SignalWifi1BarIcon };
