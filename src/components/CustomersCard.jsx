import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

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
