import React from 'react'

export default function ComponentHeader({title,subheading}) {
  return (
    <div className='text-[#3d8356] text-[40px] text-center  font-bold'>
      <h2>{title}</h2>
      <p className='text-[16px] text-[#999999] font-normal pb-4 '>{subheading}</p>
    </div>
  )
}
