import React from 'react';
import {Store1} from "./Store1";

const propTypes = {};
const defaultProps = {};

const Counter1 = (props) => {
    const {item} = props;
    const {state, eventHandlers} = React.useContext(Store1);
    const value = state[item];
    return(
        <div className={item} onClick={()=>{
          eventHandlers.increment(item);
        }}>
          {value}
        </div>
    );
};

Counter1.propTypes = propTypes;

Counter1.defaultProps = defaultProps;



export default Counter1;
