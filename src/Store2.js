import React from 'react';
import PropTypes from 'prop-types';

export const Store2 = React.createContext();

const propTypes = {
  children: PropTypes.element.isRequired,
  state: PropTypes.object.isRequired,
  eventHandlers: PropTypes.object.isRequired,
};

export function Store2Provider(props) {
  const { children, state, eventHandlers } = props;

  const value = { state, eventHandlers };
  return <Store2.Provider value={value}>{children}</Store2.Provider>;
}

Store2Provider.propTypes = propTypes;
