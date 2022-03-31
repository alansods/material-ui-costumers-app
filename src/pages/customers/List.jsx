import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import CustomersCard from "../../components/CustomersCard";

export default function List() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;
      setCustomers(data);
    });
  }, []);

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(() => {
      const newCustomersState = customers.filter((customer) => customer.id !== id)
      setCustomers(newCustomersState)
    })
  }

  return (
    <Grid container spacing={3}>
      {customers.map(item => (
        <Grid item xs={12} md={4}>
          <CustomersCard
            id={item.id}
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
            onRemoveCustomer={handleRemoveCustomer}
          />
        </Grid>
      ))}
    </Grid>
  );
}
