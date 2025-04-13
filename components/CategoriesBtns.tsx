import React from 'react'

type Props = {
    activeBtn: string,
    handleActiveBtn: (name:string) => void
}

const CategoriesBtns = ({activeBtn, handleActiveBtn}: Props) => {

    const buttons: string[] = ['all', 'vegan', 'breakfast', 'lunch', 'dinner', 'dessert', 'quick bite!']

  return (
      <div className='flex items-center gap-4 flex-wrap'>
          {buttons.map((btn, index) => {
              return (
                  <button type='button' key={index} className={`uppercase md:text-lg lg:text-xl px-5 py-1 md:px-7 md:py-2 rounded-2xl text-[#646F77] border cursor-pointer  ${activeBtn === btn ? 'bg-[#9FDC26] text-white border-[#9FDC26]' : 'text-[#646F77] border-[#646F77]'}`} onClick={() => handleActiveBtn(btn)}>
                      {btn}
                  </button>
              )
          })}
    </div>
  )
}

export default CategoriesBtns