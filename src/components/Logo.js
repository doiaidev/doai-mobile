import React from 'react';
import SvgUri from 'react-native-svg-uri';

export default function Logo(props) {
  return (
    <SvgUri
      height={props.height}
      width={props.width}
      source={require('../assets/logo.svg')}
      style={{marginBottom: 45}}
    />
  );
}
