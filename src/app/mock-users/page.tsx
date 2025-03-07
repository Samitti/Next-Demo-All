
type User = {
    id: number;
    name: string;
}

export default async function UsersServer () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch('http://67cb378f3395520e6af4b749.mockapi.io/users');
    const users = await response.json();
    
    async function addUser(formData: FormData) {        
        "use server";
        const name = formData.get('name');
        const response = await fetch('http://67cb378f3395520e6af4b749.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization:"Bearer YOUR_PRIVET_KEY"
            },
            body: JSON.stringify({ name})
        });
        const newUser = await response.json();
        console.log(newUser);
    }
    
    return (
        <div>
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2" />
                <button type="submit" className="bg-blue-500 text-white p-2">Add User</button>
            </form>

            <div className='grid grid-cols-4 gap-4 py-10'>                
            
            {users.map((user: User) => (
                <div key={user.id} className=' p-4 bg-white shadow-md text-gray-800'>
                    {user.name} 
                </div>
            ))}            
            </div>
        </div>
        
      
    );
}