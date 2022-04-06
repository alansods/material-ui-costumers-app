import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Skeleton from '@material-ui/lab/Skeleton';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import ModalConfirm from "./ModalConfirm";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 40,
  },
}));

export default function CustumerCard({
  id,
  name,
  lastname,
  email,
  avatar,
  onRemoveCustomer,
  onEditCustomer,
  skeleton
}) {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleConfirmModal = (id) => {
    onRemoveCustomer(id);
    handleToggleOpenModal();
  };

  const handleRemoveCustomer = () => {
    handleToggleOpenModal();
  };

  const handleEditCustomer = (id) => {
    onEditCustomer(id);
  };

  return (
    <>
      {skeleton ? <Skeleton variant="rectangular" width={210} height={118} /> : (
        <Card className={classes.root} variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="editar cadastro"
            onClick={() => handleEditCustomer(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="remover cadastro"
            onClick={() => handleRemoveCustomer()}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      ) }
        
        <ModalConfirm
          open={openModal}
          onClose={handleToggleOpenModal}
          onConfirm={() => handleConfirmModal(id)}
          title="Deseja excluir esse cadastro?"
          message="Ao confirmar não será possível recuperar esse cadastro."
        />
    </>
  );
}
