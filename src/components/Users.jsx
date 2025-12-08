import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
       const GetUsers = async () => {
         try {
          const res = await fetch("https://dummyjson.com/users")
          const data = await res.json();
           setUsers(data.users);
           setLoading(false);
         } 
         catch (err) {
          console.error("error", err);
          setLoading(false);
       }
       } 
     GetUsers();
     }, []);
     
   if (loading) {
     return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
     );
   }

  return (

    <div className="container mx-auto p-10 text-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((item) => (
          <div key={item.id} className="card bg-base-200 hover:shadow-2xl shadow-blue-500 transition-all">
            <figure className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-full"/>
            </figure>
        
            <div className="card-body">
              <h1 className="card-title text-xl text-blue-500">Ismi: {item.firstName}</h1>
              <h2 className="card-title text-xl text-red-600">Familyasi: {item.lastName}</h2>
               <h2 className="card-title text-lg">Yoshi: {item.age}</h2>
               <h2 className="card-title text-lg">Jinsi: {item.gender}</h2>
                <h2 className="text-lg text-start text-yellow-400 mt-3 font-semibold">Foydalanuvchini emaili: {item.email}</h2>
                <p className='text-lg text-start text-yellow-600 mt-5 font-mono'>Foydalanuvchini passwordi: {item.password}</p>
                 <h2 className="text-xl text-start text-green-600 mt-5">Tug'ilgan yili: {item.birthDate}</h2>
                 <h2 className="text-xl text-start text-green-600 mt-2">Telefon raqami: {item.phone}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;