import React, { useState } from "react";

import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { theme } from "~/styles";

const FavoritedButton = () => {
  const [favorited, setFavorited] = useState(false)

  return (
    <IconButton aria-label="add to favorites" onClick={() => setFavorited(!favorited)}>
      <Favorite sx={{ fontSize: '1.5rem', color: favorited ? theme.palette.colors.pink : 'inherit' }} />
    </IconButton>
  )
}

export default FavoritedButton;
