

import { Card } from "../../components/Card"
import { useState, useEffect } from 'react';
import { petService } from "../../service/pets";
const { getAllRabbits } = petService;

export const RabbitPage =()=>{          
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await getAllRabbits()
console.log(result);
            setData(result.data);
        } catch (err) {
            setError(err);
        }
    };

    fetchData();

    }, []);

    if (error)
        return <div>Error: {error.message}</div>;


    if (!data)
        return <div>Loading...</div>;
//return images with name 
    return (
        <div className="container">  
            <h1>Rabbits</h1>
            <div className="row">

            {data.ads.map((character) => (
                
                <div className="col-lg-3 col-md-4 col-sm-6">
                <Card key={character.id} character={character}/>
                </div>
               
               ))}
               </div>
        </div>
    );
     
  
};
    

    

    


