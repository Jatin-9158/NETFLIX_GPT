import React from 'react'
import { useSelector } from 'react-redux'
import { LANG_CONSTANTS } from '../utils/lang_constants'
import { useRef } from 'react'
import openai from '../utils/openai'
const GptSearchBar = () => {
  const langkey = useSelector((store)=> store.config.language)  
  const searchText = useRef(null);
  const handleGptSearch = async()=>{
     console.log(searchText.current.value); 

     const gptResults = await openai.chat.completions.create({
        messages:[{role:"user",content:searchText.current.value}],
        model:"gpt-3.5-turbo",
     })
     console.log(gptResults);
  }
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2  bg-black  grid grid-cols-12 m-4 " onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={LANG_CONSTANTS[langkey].search_placeholder}></input>
            <button className="bg-red-600 m-4 py-2 px-4 font-bold text-white rounded-md col-span-3" onClick={handleGptSearch}>{LANG_CONSTANTS[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar