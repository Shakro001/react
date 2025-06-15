
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import service from '../../services/flightService';

import { NavLink } from 'react-router-dom';


function FlightsApi() {
      const {data, isError, isLoading, error} = useQuery({ queryKey: ['flights'], queryFn: ()=> service.get('flights') })
      if(isLoading) return <p>Loading...</p>
      if(isError) return <p>Error... {error.message} </p>

    return  data.length ? <ul>{data.map((el,index) => <li key={el.id}><NavLink to={`/:${el.id}`}>from {el.origin} to {el.destination}</NavLink> </li>)}</ul> : null
}

export default FlightsApi
