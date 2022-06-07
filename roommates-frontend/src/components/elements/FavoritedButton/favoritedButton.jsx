import React, { useState } from "react";

import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { theme } from "~/styles";

const FavoritedButton = (props) => {
  const [favorited, setFavorited] = useState(false)

  const handleClick = (event) => {
      event.preventDefault()
      return setFavorited(!favorited)
  }
  return (
    <IconButton {...props} sx={{ backgroundColor: theme.palette.background.lightest}} aria-label="add to favorites" onClick={(event) => handleClick(event)}>
      <Favorite sx={{ fontSize: '1.5rem', color: favorited ? theme.palette.colors.pink : 'inherit' }} />
    </IconButton>
  )
}

export default FavoritedButton;
