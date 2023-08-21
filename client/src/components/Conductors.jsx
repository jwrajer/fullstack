import { useState } from 'react';
import axios from 'axios';

const Conductors = ({ token }) => {

  const [conductors, setConductors] = useState([]);

  const getConductors = async() => {
    try {
      const response = await axios.get('/api/conductors', {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      setConductors(response.data);
    } catch (err) {

    }
  }
  getConductors();

  return (
    <>
      {conductors.map(conductor => {
        return (
          <section key={conductor.id}>
            <h2>{conductor.name}</h2>
            <ul>
              <li>Year hired: {conductor.yearHired}</li>
              <li>Train ID: {conductor.trainId}</li>
            </ul>
          </section>
        )
      })}
    </>
  )

}

export default Conductors