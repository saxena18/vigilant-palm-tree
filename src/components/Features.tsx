import { Container, Grid, Paper, Typography } from '@mui/material';
import { Monitor, Share2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: <Monitor />,
    title: 'Multiple Devices',
    description: 'Generate mockups for desktop, mobile, and tablet devices',
  },
  {
    icon: <Share2 />,
    title: 'Social Media Ready',
    description: 'Perfect dimensions for all social media platforms',
  },
  {
    icon: <Palette />,
    title: 'Customizable',
    description: 'Choose from various styles and customize colors',
  },
  {
    icon: <Zap />,
    title: 'Instant Generation',
    description: 'Get your mockups in seconds, not minutes',
  },
];

export default function Features() {
  return (
    <Container id="features" className="py-16">
      <Typography variant="h3" className="text-center mb-12">
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper className="p-6 bg-gray-800 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="text-indigo-500 mb-4 w-12 h-12">
                  {feature.icon}
                </div>
                <Typography variant="h6" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}