import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import ClientContext from '../context/ClientContext'
import { useSearchParams } from 'react-router-dom';


const ServiceSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const someQueryParam = searchParams.get("keyword");


    console.log(someQueryParam,'querry boxxxxxx')

    const [keyword, setKeyword] = useState('')
    let {servicesearchHandler} = useContext(ClientContext)
    console.log(keyword)
 

    useEffect(() => {

        const getData = setTimeout(() => {
            servicesearchHandler(keyword)
          }, 2000)
    
      return () => clearTimeout(getData);
    }, [keyword])



    return (  
            <input
                type='text'
                name='q'
                onChange={(e) =>setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
                placeholder="e.g. Service title"
            />
    )

}

export default ServiceSearch
