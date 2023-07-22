import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./visualize.css"
import {useDispatch, useSelector} from "react-redux"
import {FaChessQueen as Queen} from "react-icons/fa"
import { updateBoard } from '../slice/appSlice'
import LogCard from './LogCard.jsx'
import ReactScrollToBottom  from "react-scroll-to-bottom"
import Header from './Header'

const Visualize = () => {

    const dispatch = useDispatch();
    const {dimension, board} = useSelector(s=>s.main);

    const [logData, setLogData]=useState([])
    const [s, setZ]=useState()

    const isMounted = useRef(true)
  
    useEffect(() => {
        let n= dimension;
        let chessBoard = JSON.parse(JSON.stringify(board));
        const rowsCheck = Array.from({ length: n }, () => 0);
        const ldiag = Array.from({ length: 2 * n - 1 }, () => 0);
        const rdiag = Array.from({ length: 2 * n - 1 }, () => 0);

      console.log(rowsCheck);
        const solve = async (col) => {
          if (col===Number(n)) {
            setZ(n);
            return true;

          }
      
          for (let i = 0; i < n; i++) {
            if (rowsCheck[i] === 0 && ldiag[i + col] === 0 && rdiag[n - 1 + col - i] === 0) {
                rowsCheck[i] = 1;
              ldiag[i + col] = 1;
              rdiag[n - 1 + col - i] = 1;
              chessBoard[i][col] = "Q";
              let data = {
                i:i+1,
                j:col+1,
                adding:true,
                success:false
              }
              logData.push(data);
              dispatch(updateBoard({i:i, j:col, add:true})); 
              await new Promise((resolve) => setTimeout(resolve, 100));
              const success = await solve(col + 1);
              if (success) {
                return true;
              }
              rowsCheck[i] = 0; 
              ldiag[i + col] = 0;
              rdiag[n - 1 + col - i] = 0;
              chessBoard[i][col] = " ";
              data = {
                i:i+1,
                j:col+1,
                adding:false,
                success:false
              }
              logData.push(data);
              dispatch(updateBoard({i:i, j:col, add:false}));
              await new Promise((resolve) => setTimeout(resolve, 100)); 
            }
          }
      
          return false;
        };
      
        if(isMounted.current){
            solve(0);
        }

        return () => {
            isMounted.current = false;
          };
        
        
      }, [dimension, dispatch]); 

          console.log(logData);

          if(s===dimension){
            let data ={
                i:dimension,
                j:dimension,
                adding:true,
                success:true
            }
            logData.push(data)
        }


  return (
    <Fragment>
        <div className='visualize_wrapper'>
            <Header/>
            <div className='visualize_content'>
                <div className='board_section_V'>
                <div className="board_wrapper_V">
                {board?.map((row, rIdx)=>{
                    return(
                        <div className='row_V' key={rIdx}>
                            {row?.map((col, cIdx)=>{
                                return(
                                    <div className={`box_V  ${
                                        (rIdx+cIdx)%2===0?'green_V':'white_V'
                                    }`} key={cIdx} >
                                        {col==="Q" && <div className='queen'>
                                            <Queen className='_Queen' />
                                        </div> }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
                </div>
                <div className='log_section'>
                    <div className='log_header'>
                        <h4> Logs</h4>
                    </div>
                    <ReactScrollToBottom  className="log_content">
                        {logData.map((data, i)=>{
                            return <LogCard key={i} data={data} />
                        })}
                        

                    </ReactScrollToBottom>
                </div>
            </div>
        </div>
        
    </Fragment>
  )
}

export default Visualize