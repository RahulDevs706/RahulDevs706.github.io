import React, { Fragment, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setDimension } from '../slice/appSlice';
import {useSelector} from "react-redux"
import "./home.css"

const Home = () => {
    const navigate = useNavigate();
    const [dimensions, setDimensions]= useState(8);

    const {board} = useSelector(s=>s.main)

    const dispatch = useDispatch();
    const handleDimChange=(e)=>{
      setDimensions(e.target.value)
    }

    useEffect(() => {
      dispatch(setDimension(dimensions))
    }, [dimensions, dispatch])
    

  return (
    <Fragment>
         <div className='main_wrapper'>
            <div className='heading_section'>
            <h1>
                N-Queens Visualizer!
            </h1>
            <h4>
                Enter the size of chess board you want
            </h4>
            <h6>
                The default value is 8
            </h6>
            <select  type='number' name="dimension" value={dimensions} className="board_input" placeholder='8' onChange={handleDimChange}>
                <option value="4">4</option>
                <option value="6">6</option>
                <option selected value="8">8</option>
                <option  value="10">10</option>

            </select>
            <button className="visualize" onClick={()=>navigate("/visualize")}>
                Visualize
            </button>
            <h6>
                Created By Rahul Singh @2023
            </h6>
            </div>
            <div className="board_section">
            <div className="board_wrapper">
                {board?.map((row, rIdx)=>{
                    return(
                        <div className='row' key={rIdx}>
                            {row?.map((col, cIdx)=>{
                                return(
                                    <div className={`box ${
                                        (rIdx+cIdx)%2===0?'green':'white'
                                    }`} key={cIdx} >
                                    
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home