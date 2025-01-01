import { Paper, Skeleton } from '@mui/material';
import { useState } from 'react';

interface DevicePreviewProps {
  url: string;
}

export default function DevicePreview({ url }: DevicePreviewProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Paper className="p-4 bg-gray-700 aspect-video relative">
      {loading && (
        <Skeleton 
          variant="rectangular" 
          className="w-full h-full absolute top-0 left-0"
          animation="wave"
        />
      )}
      <img
        src={url}
        alt="Website Mockup"
        className="w-full h-full object-contain"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </Paper>
  );
}