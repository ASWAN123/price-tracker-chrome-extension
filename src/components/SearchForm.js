import React, { useState } from "react";
import { SearchIcon } from "./Icons";

const SearchForm = ({setDefaultCoin}) => {
    const  [content ,  setContent] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(content.trim() === '' ) return 

        
        setContent('')
        setDefaultCoin(content)
        
    }



    return (

            <form  onSubmit={handleSubmit} className="flex w-full gap-4 items-center p-4">
                <SearchIcon className="w-6 h-6  cursor-pointer " />
                <input
                    value={content}
                    onChange={(e) => {setContent(e.target.value)}}
                    className=" bg-transparent outline-none w-full border-gray-200 text-[14px] py-1 px-2 "
                    placeholder="Search network, dex or tokens"
                    type="text"
                    name=""
                    id=""
                />
                
            </form>
        
    );
};

export default SearchForm;
