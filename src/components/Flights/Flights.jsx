


import React from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import FlightsApi from './FlightsApi';
import z from 'zod'

import FlightsFilter from './FlightsFilter';
import useStore from '../../store/flightSlice';


import { useSearchParams } from 'react-router-dom';

function Flights() {

    const setFilter = useStore(state => state.setFilter)

    const [searchParams, setSearchParams] = useSearchParams();

    const schema = z.object({
        origin: z.string().min(1),
        destination: z.string().min(1),
        departureDate: z.string().min(1)
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            origin: searchParams.get('origin') || '',
            destination: searchParams.get('destination') || '',
            departureDate: searchParams.get('departureDate') || ''
        }
    })

    const onSubmit = (data) => {
        setFilter(data);
        const newSearchParams = new URLSearchParams();
        newSearchParams.set('origin', data.origin);
        newSearchParams.set('destination', data.destination);
        newSearchParams.set('departureDate', data.departureDate);
        setSearchParams(newSearchParams);
        console.log(data);

    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} action="#" className="flights-form">

                {errors.origin && <p>{errors.origin.message}</p>}
                {errors.destination && <p>{errors.destination.message}</p>}
                {errors.departureDate && <p>{errors.departureDate.message}</p>}

                <label>
                    origin:
                    <input {...register('origin')} type="text" />
                </label>
                <hr />
                <label>
                    destination:
                    <input {...register('destination')} type="text" />
                </label>
                <hr />
                <label>
                    departureDate:
                    <input {...register('departureDate')} type="date" />
                </label>
                <hr />

                <button>Submit</button>
            </form>
            {/* <FlightsApi /> */}

            <FlightsFilter />


        </>

    )
}

export default Flights
