import { useState } from 'react';
import { TextField, Button, Paper, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { Download, Link as LinkIcon } from 'lucide-react';
import { generateMockup } from '../utils/mockupGenerator';
import DevicePreview from './DevicePreview';

export default function MockupGenerator() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [mockupUrl, setMockupUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError('');
    setMockupUrl('');

    try {
      // Add https:// if not present
      const processedUrl = url.startsWith('http') ? url : `https://${url}`;
      const result = await generateMockup(processedUrl);
      
      if (result.error) {
        setError(result.error);
      } else {
        setMockupUrl(result.imageUrl);
      }
    } catch (err) {
      setError('Failed to generate mockup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="generator" className="py-16">
      <Paper className="p-8 bg-gray-800">
        <Typography variant="h4" className="mb-6 text-center">
          Generate Your Mockup
        </Typography>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            fullWidth
            label="Website URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="example.com"
            disabled={loading}
            error={!!error}
            helperText={error || 'Enter website URL (https:// will be added automatically if missing)'}
            InputProps={{
              startAdornment: <LinkIcon className="w-5 h-5 mr-2 text-gray-400" />,
            }}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            disabled={loading || !url.trim()}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Generating...' : 'Generate Mockup'}
          </Button>
        </form>
        
        {mockupUrl && (
          <div className="mt-8 space-y-4">
            <DevicePreview url={mockupUrl} />
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              startIcon={<Download />}
              onClick={() => window.open(mockupUrl, '_blank')}
            >
              Download Mockup
            </Button>
          </div>
        )}
      </Paper>
    </Container>
  );
}