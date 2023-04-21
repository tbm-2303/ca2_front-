import React, { useState } from 'react'
import { useEffect } from 'react';
import facade from '../apiFacade';
import {Container, Table} from "react-bootstrap";

const List = ({user}) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        facade.fetchData('/api/info/getAll')
            .then((response) => response.json())
            .then((json) => setData(json))     
    },[]);
   
    return (
        <div>
     
        </div>
    )
        
    
}

export default List
