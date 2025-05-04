

import React, { useState, useEffect } from "react";
import service from "../../services/mockapi";

export default function DelEl({el, getApi}){

    const handleDeleteEl = async (id) => {
            try {
              const response = await service.delete("users", id);
              getApi();
            } catch (error) {
              console.log(error);
            }
          };

    return (
        <button onClick={() => handleDeleteEl(el.id)}>DEL EL</button>
    )
}