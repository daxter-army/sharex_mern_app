import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

    const DUMMY_PLACES = [
        {
            id:'p1',
            title: 'Hollywood',
            description: 'This place do not needs a decription',
            imageUrl: 'https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
            address: 'Hollywood, Los Angeles',
            location: {
                lat: 34.0937308,
                lng: -118.3966894
            },
            creator: 'u1'
        },
        {
            id:'p2',
            title: 'Hollywood',
            description: 'This place do not needs a decription',
            imageUrl: 'https://images.unsplash.com/photo-1581390114939-946f9a890a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
            address: 'Hollywood, Los Angeles',
            location: {
                lat: 34.0937308,
                lng: -118.3966894
            },
            creator: 'u2'
        }
    ]

    const UserPlaces = () => {
        const userId = useParams().userId;
        const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

        return <PlaceList items={loadedPlaces} />
    }

export default UserPlaces