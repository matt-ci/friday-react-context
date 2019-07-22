import React from 'react';
import PropTypes from 'prop-types';

export const Store1 = React.createContext();

const propTypes = {
  children: PropTypes.element.isRequired,
  state: PropTypes.object.isRequired,
  eventHandlers: PropTypes.object.isRequired,
};

export function StoreProvider(props) {
  const { children, state, eventHandlers } = props;

  const value = { state, eventHandlers };
  return <Store1.Provider value={value}>{children}</Store1.Provider>;
}

StoreProvider.propTypes = propTypes;
