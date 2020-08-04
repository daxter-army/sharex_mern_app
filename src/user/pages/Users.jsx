import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
                    {
                        id:'u1',
                        name:'Mehul Singh Teya',
                        image:'https://images.unsplash.com/photo-1596549837248-489c18f53cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        places: 5
                    }
                ]
    
    return(
        <UsersList items={USERS}/>
    )
}
export default Users;