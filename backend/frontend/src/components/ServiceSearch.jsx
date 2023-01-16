import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import ClientContext from '../context/ClientContext'
import { useDebounce } from '../customHooks/useDebounce'


const ServiceSearch = () => {

    const [keyword, setKeyword] = useState('')
    let {servicesearchHandler,searchloading,setSearchLoading} = useContext(ClientContext)
    if (keyword === ''){
        setSearchLoading(false)
    }
    const searchQuery = useDebounce(keyword, 2000)
    console.log(searchQuery,'qiwiwiwiwi')


    useEffect(() => {        
        servicesearchHandler(searchQuery)
        console.log('effect worked')
    }, [searchQuery])



    return (  
            <input
                type='text'
                name='q'
                onChange={(e) =>{
                    setKeyword(e.target.value)
                    setSearchLoading(true)}
                }
                className='mr-sm-2 ml-sm-5'
                placeholder="e.g. Service title"
            />
    )
}

export default ServiceSearch