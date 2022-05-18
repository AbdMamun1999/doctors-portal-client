import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user,index) =><UserRow
                        index={index}
                        key={index}
                        user={user}
                        refetch={refetch}
                        ></UserRow>)
                           
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;