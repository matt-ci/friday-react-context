import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
const propTypes = {};
const defaultProps = {};

const Counter2 = (props) => {
    const {item} = props;
    const dispatch = useDispatch()
    const value = useSelector(state=>state[item]);
    return(
        <div className={item} onClick={()=>{
          dispatch({type:'increment', key:item})
        }}>
          {value}
        </div>
    );
};

Counter2.propTypes = propTypes;

Counter2.defaultProps = defaultProps;



export default Counter2;
