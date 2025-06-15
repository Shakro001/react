import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import useStore from '../../store/flightSlice'
import service from '../../services/flightService';
import { useParams, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import queryClient from '../../api/QueryClient';

function FlightsDetails() {
    const { id } = useParams()
    const navigate = useNavigate() 

    const filter = useStore(state => state.filter);


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['flights', id],
        queryFn: () => service.get('flights', id),
        enabled: !!id, 
    });

    const schema = z.object({
        fullname: z.string().min(3, { message: 'Full name must be at least 3 characters' }).max(50, { message: 'Full name must be at most 50 characters' }),
        email: z.string().email({ message: 'Invalid email format' }),
        phone: z.string().regex(/^\+?[0-9]{10,15}$/, { message: 'Invalid phone number format' }),
        confirmAgr: z.boolean().refine(val => val === true, { message: 'You must confirm the agreement' }),
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const mutation = useMutation({
        mutationFn: async () => {

            if (!data || typeof data.availableSeats !== 'number') {
                throw new Error('Flight data or availableSeats not found.');
            }
            return service.put('flights', id, { availableSeats: data.availableSeats - 1 });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['flights', id] }); 
            queryClient.invalidateQueries({ queryKey: ['flights'] }); 
            navigate('/'); 
        }
    });

    const onSubmitRegistration = (data) => {
        mutation.mutate();
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    console.log(data);

    return (
        <>
            <h1>Flight Detail:</h1>
            FlightNumber: {data.flightNumber} <br />
            from {data.origin} to {data.destination} <br />
            Date: {data.departureDate} time: {data.departureTime} <br />
            duration: {data.duration} <br />
            price: {data.price} <br />
            Available Seats: {data.availableSeats} 

            <form onSubmit={handleSubmit(onSubmitRegistration)}> 
                <h2>REGISTRATION</h2>
                <label>
                    full name:
                    <input {...register('fullname')} type="text" />
                </label>
                {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname.message}</p>}
                <br />
                <label >
                    email:
                    <input {...register('email')} type="email" />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                <br />
                <label>
                    phone:
                    <input {...register('phone')} type="tel" />
                </label>
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                <br />
                <label>
                    confirmAgreement:
                    <input {...register('confirmAgr')} type="checkbox" />
                </label>
                {errors.confirmAgr && <p style={{ color: 'red' }}>{errors.confirmAgr.message}</p>}
                <br />

                <button type="submit" disabled={mutation.isPending || data.availableSeats <= 0}>
                    {mutation.isPending ? 'Submitting...' : (data.availableSeats <= 0 ? 'No Seats Available' : 'Submit')}
                </button>
                {mutation.isError && <p style={{ color: 'red' }}>Error: {mutation.error.message}</p>}
            </form>
        </>
    )
}

export default FlightsDetails;