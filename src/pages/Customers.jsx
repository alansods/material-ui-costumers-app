
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Customers() {
  const [customers, setCustomers] = useState()

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(() => {
      const { data } = response.data
      setCustomers(data)
    })
  })

  return (
    <>
      <h1>Customers</h1>
    </>
  );
}
