import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListOfPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7118/api/People');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const people = await response.json();
      setPeople(people);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

 return (
  <div>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
    {loading ? (
        <tbody>
            <tr>
                <td>Loading...</td>
            </tr>
            </tbody>
    ) : error ? (
        <tbody>
            <tr>
                <td>Error: {error}</td>
            </tr>
        </tbody>
    ) : (
        <tbody>
            {people.map((person) => (
                <tr>    
                    <th scope="row">{person.id}</th>
                    <td>{person.fullName}</td>
                    <td>{person.email}</td>
                </tr>   
            ))}
        </tbody>
        
    )}
    </table>
  </div>
);
};

export default ListOfPeople;