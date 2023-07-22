import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'nQueensStore',
  initialState: {
    dimension:8,
    board:Array(8).fill(Array(8).fill(" ")),
  },
  reducers: {

    updateBoard:(state, action)=>{
       
        const i = action.payload.i;
        const j = action.payload.j;


        const {board} = state;



        let newBoard = JSON.parse(JSON.stringify(board));

        if(action.payload.add){
            newBoard[i][j] ="Q";
        }else{
            newBoard[i][j]=" ";
        }

       return{
        ...state,
        board:newBoard,
       } 
    },

    setDimension:(state, action)=>{
        const dim = action.payload;
        const newBoard = [];

        for (let i = 0; i < dim; i++) {
          const row = [];

          for(let j=0; j<dim; j++){
            row.push(" ")
          }

          newBoard.push(row);
        }
        return{
            dimension:dim,
            board:newBoard,
        }
    },

    reset:(state)=>{
        return{
            dimension:8,
            board:Array(8).fill(Array(8).fill(" ")),
        }
    }

  }
   
})

// Action creators are generated for each case reducer function
export const { updateBoard, setDimension, reset } = appSlice.actions

export default appSlice.reducer