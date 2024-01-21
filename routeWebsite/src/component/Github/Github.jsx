import React, { useEffect, useState } from 'react'
function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.github.com/users/AizenFreecs');
            const temp = await response.json();
            setData(temp);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        
      }, []);

    
  return (
    <div className="m-4 p-4 rounded-sm bg-gradient-to-tr from-amber-300 to-blue-600 text-center text-white flex items-center justify-center flex-col">
        <h1>Welcome {data.login}</h1>
        <img
        className="rounded-lg mt-2 p-2 bg-gradient-to-tr from-blue-600 to-amber-300 " 
        src={data.avatar_url} alt="Git Profile image" width={240} />
    </div>
  )
  
}

export default Github