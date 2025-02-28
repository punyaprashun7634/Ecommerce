import React from 'react'

const InputBox = ({id, name, type="text",text, HandleClick, value}) => {
  return (
    <div className="input-box w-full flex flex-col">
        <label htmlFor={id} className=''>{text}</label>
        <input type={type} value={value} name={name} id={id} className='border-b-2 border-black flex w-full outline-none py-2 text-md text-black'
        onChange={HandleClick}
        />
      </div>
  )
}

export default InputBox
