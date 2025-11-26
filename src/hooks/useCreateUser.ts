// hooks/useCreateUser.ts
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface IUser {
  username: string;
  contact: string;  // better as string for phone numbers
  isActive: boolean;
}

const createUser = async (userData: IUser): Promise<IUser> => {
  const { data } = await axios.post('http://127.0.0.1:5000/api/users', userData);
  return data;
};

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch users list after successful creation
      queryClient.invalidateQueries({ queryKey: ['repoUsers'] });
    },

    
    onError: (error) => {
      console.error('Failed to create user:', error);
      // You can show a notification here
    },
  });
};

export default useCreateUser;