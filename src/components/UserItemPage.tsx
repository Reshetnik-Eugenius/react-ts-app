import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        fetchUser();
    } ,[])

    async function fetchUser(){
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ id);
            setUser(response.data);
        } catch(e) {
            alert(e);
        }
    }
  return (
    <div>
    <button>Back</button>
    <h1>Users page: {user?.name}</h1>
    <div>
        {user?.email}
    </div>
    <div>
        {user?.address.city}
    </div>
</div>
  )
}

export default UserItemPage