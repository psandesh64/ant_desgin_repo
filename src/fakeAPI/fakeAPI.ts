// Simulated delay function
const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'pending' }
];

interface fakeAPIInterface {
  getUsers: () => Promise<{ success: boolean; data: typeof mockUsers; message: string }>;
  getUserById: (id:string) => Promise<{ success: boolean; data: typeof mockUsers[0] | null; message: string }>;
  updateUser: (id:string, userData:any) => Promise<{ success: boolean; data: typeof mockUsers[0] | null; message: string }>;
  deleteUser: (id:string) => Promise<{ success: boolean; data: typeof mockUsers[0] | null; message: string }>;
}

// Fake API functions
export const fakeAPI:fakeAPIInterface = {
  // Get all users
  getUsers: async () => {
    await delay(1000); // Simulate network delay
    return {
      success: true,
      data: mockUsers,
      message: 'Users fetched successfully'
    };
  },

  // Get user by ID
  getUserById: async (id:string) => {
    await delay(800);
    const user = mockUsers.find(u => u.id === parseInt(id));
    
    if (user) {
      return {
        success: true,
        data: user,
        message: 'User found'
      };
    } else {
      return {
        success: false,
        data: null,
        message: 'User not found'
      };
    }
  },
  // Update user
  updateUser: async (id:string, userData:any) => {
    await delay(900);
    const userIndex = mockUsers.findIndex(u => u.id === parseInt(id));
    
    if (userIndex !== -1) {
      mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData };
      return {
        success: true,
        data: mockUsers[userIndex],
        message: 'User updated successfully'
      };
    } else {
      return {
        success: false,
        data: null,
        message: 'User not found'
      };
    }
  },

  // Delete user
  deleteUser: async (id:string) => {
    await delay(700);
    const userIndex = mockUsers.findIndex(u => u.id === parseInt(id));
    
    if (userIndex !== -1) {
      const deletedUser = mockUsers.splice(userIndex, 1)[0];
      return {
        success: true,
        data: deletedUser,
        message: 'User deleted successfully'
      };
    } else {
      return {
        success: false,
        data: null,
        message: 'User not found'
      };
    }
  },
}

export default {fakeAPI};