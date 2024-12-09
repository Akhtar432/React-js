import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ title, main, image, href }) {
  return (
    <div className="flex justify-center items-center sm:flex-col sm:ml-0 lg:ml-20">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="project_img"
          image={image}
          className="h-36 w-20"
        />
        <CardContent className="bg-gray-900 text-gray-100">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.white' }}>
            {main}
          </Typography>
        </CardContent>
        <CardActions className="bg-gray-900">
          <Button size="small">
            <a 
            target='_blank'
            rel="noopener noreferrer"
            href={href}>Source Link</a>
            </Button>
        </CardActions>
      </Card>
    </div>
  );
}
