import React from 'react'

const Category = ({Finalcat, setCatName}) => {
  let cat = Finalcat.map((v,i) => {
    return(
      <li onClick={() => setCatName(v)} className='text-[18px] p-2 bg-gray-200 mb-2 font-serif font-semibold cursor-pointer' key={i}>{v}</li>
    )
  })
  return (
    <div className=''>
        <h1 className='text-[25px] font-semibold mb-6 p-2.5'>Category</h1>
            <ul>
                {cat}
            </ul>
        </div>
  )
}

export default Category