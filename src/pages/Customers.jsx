import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import CustomersCard from "../components/CustomersCard";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      const { data } = response.data;
      setCustomers(data);
    });
  });

  return (
    <Grid container spacing={3}>
      {customers.map((item) => (
        <Grid item xs={12} md={4}>
          <CustomersCard
            name={item.first_name}
            lastname={item.last_name}
            email={item.email}
            avatar={item.avatar}
          />
        </Grid>
      ))}
    </Grid>
  );
}
