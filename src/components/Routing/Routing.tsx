import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {HomePage} from "@/components/HomePage/HomePage";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage size={3} />}/>
            <Route path='/bonus' element={<HomePage size={5} />}/>
        </Routes>
    )
}