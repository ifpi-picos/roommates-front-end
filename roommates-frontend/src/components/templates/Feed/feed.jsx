import React from "react";
import Link from "next/link";

import { Box } from "@mui/material";

import { Card } from "~/components";

const Feed = ({ posts }) => {
  return (
    <>
      {
        posts.map((post, index) => {
          return (
            <Link href={`/publicacao/${post.id}`}>
              <Box key={index} sx={{ padding: '1rem 0' }}>
                <Card
                  images={post.images}
                  starRating={post.starRating}
                  totalComments={post.totalComments}
                >
                  {post.description}
                </Card>
              </Box>
            </Link>
          )
        })
      }
    </>
  )
}

export default Feed;
