
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    
    return (
        <ul className='space-y-4'>       
            
                {users.map((user: User) => (
                    <li key={user.id} className='p-4 bg-white shadow-md text-gray-800'>
                        {user.name} ({user.email})
                    </li>
                ))}            
        </ul>
    );
}