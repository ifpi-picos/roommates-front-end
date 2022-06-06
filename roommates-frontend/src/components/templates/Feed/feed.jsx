import React from "react";
import { Box } from "@mui/material";

import { Card } from "~/components";

const Feed = ({ publications }) => {
  return (
    <>
      {
        publications.map((publication, index) => {
          return (
            <Box key={index} sx={{padding: '1rem 0'}}>
              <Card
              image={publication.image}
              startRating={publication.startRating}
              comments={publication.comments}
            >
              { publication.description }
            </Card>
            </Box>
          )
        })
      }
    </>
  )
}

export default Feed;
