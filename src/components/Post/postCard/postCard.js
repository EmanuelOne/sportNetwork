import React from "react";
import { Button, Box as MUICard, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import {Link} from 'react-router-dom'
const PostCard = ({ post: { image, category, headline, content } }) => {
  return (
    
    <Card className="card" sx={{ display: "flex" }}>
      <Box classname="post-image">
        <img src={image} alt="" />
      </Box>
      <Box className="post-body">
        <Typography
          variant={"p"}
          component="p"
          sx={{
            fontWeight: 600,
            color: "rgba(0, 0, 0, 0.4)",
            textTransform: "uppercase",
          }}
        >
          {category}
        </Typography>
        <Typography
          variant={"p"}
          component="p"
          sx={{ fontWeight: 600, color: "rgba(0, 0, 0, 1)" }}
        >
          {headline}
        </Typography>
        <Typography
          variant={"p"}
          component="p"
          sx={{ fontWeight: 600, color: "rgba(0, 0, 0, 0.7)" }}
        >
          {content}
        </Typography>
        <Link to="/article">
        <Button variant="contained" color="secondary" size="large">
          Read More
        </Button>
        </Link>
      </Box>
    </Card>
  );
};
const Card = styled(MUICard)`
  img {
    height: 250px;
  }
  .post-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 14px;
    }
    button {
      width: fit-content;
    }
  }
  box-shadow: none;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    .post-body {
      gap: 2rem;
    }
  }
`;

export default PostCard;
