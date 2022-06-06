import React from "react";
import { Box } from "@mui/material";

import { Card } from "~/components";

const Feed = ({ posts }) => {
  return (
    <>
      {
        posts.map((post, index) => {
          return (
            <Box key={index} sx={{padding: '1rem 0'}}>
              <Card
              id={post.id}
              images={post.images}
              starRating={post.starRating}
              totalComments={post.totalComments}
            >
              { post.description }
            </Card>
            </Box>
          )
        })
      }
    </>
  )
}

export default Feed;
