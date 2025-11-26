// import axios from 'axios';
// import React,{ useState, useCallback, useEffect} from 'react'
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'

// const useGetUsers = () => {
//     // const [users, setUsers] = useState()
//     // const getUsers = useCallback(async ()=>{
//     //     try{
//     //         const response = await axios.get('http://127.0.0.1:5000/api/users')
//     //         setUsers(response.data)
//     //         console.log(response)

//     //     } catch (e) {
//     //         console.error(e)
//     //     }
//     // },[])

//     // useEffect(()=>{
//     //     getUsers();
//     // },[getUsers])
//     const { isPending, error, data } = useQuery({
//         queryKey: ['repoUsers'],
//         queryFn: () =>
//         axios.get('http://127.0.0.1:5000/api/users').then((res) =>
//             {
//             return res.data}
//         ),
//     })

//     // if (isPending) return 'Loading...'

//     // if (error) return 'An error has occurred: ' + error.message

//     return { isPending, data, error };
// }

// export default useGetUsers

// hooks/useGetUsers.ts
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface IUser {
  username: string;
  contact: string;
  isActive: boolean;
}

const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await axios.get('http://127.0.0.1:5000/api/users');
  return data;
};

const useGetUsers = () => {
  return useQuery({
    queryKey: ['repoUsers'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60, // 1 minute
  });
};

export default useGetUsers;