

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import service from '../../services/flightService';
import useStore from '../../store/flightSlice';
import { NavLink } from 'react-router-dom';

export default function FlightsFilter() {
  const filter = useStore(state => state.filter);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['flights', 'list'],
    queryFn: () => service.get('flights'),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;




  const filtered = data.filter(flight => {
    if (!filter) return true;
    return (
      flight.origin.toLowerCase().includes(filter.origin.toLowerCase()) &&
      flight.destination.toLowerCase().includes(filter.destination.toLowerCase()) 
      &&
      flight.departureDate === filter.departureDate
    );
  });

  return filtered.length ? (
    <ul>
      {filtered.map((el) => (
        <li key={el.id}>
          <NavLink to={`/flights/${el.id}`}>from {el.origin} to {el.destination}</NavLink>
        </li>
      ))}
    </ul>
  ) : (
    <p>No flights found</p>
  );
}
