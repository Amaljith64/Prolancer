import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import ClientContext from '../context/ClientContext'
import { useSearchParams } from 'react-router-dom';



function SearchBox() {


    const [searchParams, setSearchParams] = useSearchParams();
    const someQueryParam = searchParams.get("keyword");


    console.log(someQueryParam,'querry boxxxxxx')



    const [keyword, setKeyword] = useState('')
    let {searchHandler} = useContext(ClientContext)
    console.log(keyword)
 

    useEffect(() => {

        const getData = setTimeout(() => {
            searchHandler(keyword)
          }, 2000)
    
      return () => clearTimeout(getData);
    }, [keyword])



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
