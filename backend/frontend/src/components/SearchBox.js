import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import ClientContext from '../context/ClientContext'
import { useDebounce } from '../customHooks/useDebounce'



function SearchBox() {

    const [keyword, setKeyword] = useState('')
    
    const searchQuery = useDebounce(keyword, 2000)
    let {searchHandler} = useContext(ClientContext)
    console.log(keyword)
 

    useEffect(() => {

         searchHandler(searchQuery)
    
    }, [searchQuery])



    return (  
            <input
                type='text'
                name='q'
                onChange={(e) =>setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
                placeholder="e.g. job title"
            />
    )
}

export default SearchBox
