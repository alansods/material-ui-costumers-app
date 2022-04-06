import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Skeleton from '@material-ui/lab/Skeleton';


import Grid from "@material-ui/core/Grid";

import CustomersCard from "../../components/CustomersCard";

export default function List() {
  const history = useHistory()

  const [customers, setCustomers] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;
      setCustomers(data);
      setIsLoadingData(false)
    });
  }, []);

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(() => {
      const newCustomersState = customers.filter((customer) => customer.id !== id)
      setCustomers(newCustomersState)
    })
  }

  const handleEditCustomer = id => {
    history.push(`/customers/edit/${id}`)
  }

  return (
    <Grid container spacing={2}>
      {customers.map(item => (
        <Grid item xs={12} md={4}>
          {isLoadingData ? <Skeleton variant="rect" width={210} height={118} /> : (
            <CustomersCard
            id={item.id}
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
            onRemoveCustomer={handleRemoveCustomer}
            onEditCustomer={handleEditCustomer}
          />
          )}
        </Grid>
      ))}
    </Grid>
  );
}
