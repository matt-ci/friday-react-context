import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Store} from "./Store";

const propTypes = {};
const defaultProps = {};

const Counter = (props) => {
    const {item} = props;
    const {state, eventHandlers} = React.useContext(Store);
    console.log('state: ', state);
    const value = state[item];
    return(
        <div className={item} onClick={()=>{
          eventHandlers.increment(item);
        }}>
          {value}
        </div>
    );
};

Counter.propTypes = propTypes;

Counter.defaultProps = defaultProps;



export default Counter;
