import React from "react";

import { Avatar, CardHeader } from '@mui/material';

const SimpleCardHeader = ({ currentPost }) => {
  return (
    <CardHeader
      avatar={
        <Avatar
          src={currentPost.host.image}
          sx={{ width: 56, height: 56 }}
        />

      }
      title={currentPost.host.name}
      subheader={currentPost.publicationDate}
    />
  )
}

export default SimpleCardHeader;
