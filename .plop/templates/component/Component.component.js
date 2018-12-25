import React from 'react';
import PropTypes from 'prop-types';
import ExecutionEnvironment from 'exenv';

import { Root } from './Component.styles';

const Component = function(props, _context) {
  const { foo } = props;
  return <div className={Root}>{foo}</div>;
};

Component.propTypes = {
  foo: PropTypes.string,
};

Component.defaultProps = {
  foo: 'Hello Component',
};

if (ExecutionEnvironment.canUseDOM) {
  // Perform action if is browser
}

export default Component;
