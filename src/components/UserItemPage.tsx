import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: string
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<{id: string}>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser(); 
    } ,[])

    async function fetchUser(){
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params.id);
            setUser(response.data);
        } catch(e) {
            alert(e);
        }
    }
  return (
    <div>
    <button onClick={()=>navigate('/users')}>Back</button>
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