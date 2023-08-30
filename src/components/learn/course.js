import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Stack from '@mui/material/Stack';
import LaptopIcon from '@mui/icons-material/Laptop';

const Course = ({title, description, image, hours, url }) => (
    <>
    <Card sx={{ maxWidth: 300, mb: 2 }}>
      <CardMedia
        component="img"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} >
          <Chip
              label={`${hours} Hours`}
              icon={<AccessTimeIcon />}
              variant="outlined"
              clickable={false}
          />
          <Chip
              label="Handson"
              icon={<LaptopIcon />}
              variant="outlined"
              clickable={false}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href={url}>Learn More</Button>
      </CardActions>
    </Card>
    </>
);

export default Course;