import React, { Fragment } from 'react'
import {AiOutlineRollback} from "react-icons/ai"
import "./header.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../slice/appSlice';
const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleBack =()=>{
        dispatch(reset());
        navigate('/')
}

  return (
    <Fragment>
        <div className='header_wrapper'>
            <div className='btn_container'>
                <button onClick={handleBack} className='btn' >
                    <AiOutlineRollback className='btn_icon' />
                </button>
            </div>
            <div className='logo'>
                N-Queens Visualizer
            </div>
        </div>
    </Fragment>
  )
}

export default Header