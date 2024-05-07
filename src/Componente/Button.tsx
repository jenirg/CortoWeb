'use client';

import { useState } from 'react';

//El botón nos ayudara a mostrar el valor actual del contador
export default function LikeButton() {

    //Cumplimos la parte que dice que "El contador debe comenzar en 0 al iniciar la aplicación"
    const [likes, setLikes] = useState(0);
   
    function handleClickAumento() {
      setLikes(likes + 1);
    }

    function handleClickDisminucion() {
        setLikes(likes - 1);
      }
   
    return <button onClick={handleClickAumento}>Like ({likes})</button>;
  }

