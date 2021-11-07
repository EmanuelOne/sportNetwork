import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Slider({ info: { name, image, role } }) {
    return (
        <Card sx={{   display: 'flex'}}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {role}        </Typography>
            </CardContent>

        </Card>
    );
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