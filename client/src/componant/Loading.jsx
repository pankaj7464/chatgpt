import React from 'react'
import loader from "../image/loader.gif"
const Loading = () => {
  return (


    <>
      <div className="loader">
        <img src={loader} alt="" />
        <span>GPT THINKING</span>
      </div>
    </>
  )
}

export default Loading