import React, { Fragment } from 'react'
import "./logcard.css"

const LogCard = ({data}) => {
  return (
    <Fragment>
        <div className={data.adding?"card_wrapper success_C":"card_wrapper failed_C"}>
            {data.adding ? (
                <p>{data.success ? "Success!!!" : `-> Trying at Row: ${data.i} and Column: ${data.j}`}</p>
            ) : (
                <p>{`-> Failed! Backtracking from Row: ${data.i} and Column: ${data.j}`}</p>
            )}
        </div>
    </Fragment>
  )
}

export default LogCard