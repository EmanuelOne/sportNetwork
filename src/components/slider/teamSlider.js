import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Slider({ info: { name, image, role } }) {
  return (
    <div className="slide-body">
      <img src={info.image} alt="" />
      <div className="slide-content">
        <Typography variant="h5" color="text" component="h5">
          {info.name}
        </Typography>
        <Typography variant="h6" color="text" component="p">
          {info.role}
        </Typography>
      </div>
    </div>
  );
}
{
  /* 
<div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
*/
}

// const Card = styled(MUICard)`
//   img {
//     height: 250px;
//   }
//   .post-body {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     p {
//       font-size: 14px;
//     }
//     button {
//       width: fit-content;
//     }
//   }
//   box-shadow: none;
//   gap: 1.5rem;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     .post-body {
//       gap: 2rem;
//     }
//   }
// `;
