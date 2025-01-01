import axios from 'axios';
import toast from 'react-hot-toast';

interface MockupResult {
  imageUrl: string;
  error?: string;
}

interface DeviceMockup {
  name: string;
  frame: string;
  viewport: {
    width: number;
    height: number;
  };
}

const MOCKUP_DEVICES: DeviceMockup[] = [
  {
    name: 'Desktop',
    frame: '/frames/desktop-frame.png',
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  {
    name: 'Mobile',
    frame: '/frames/mobile-frame.png',
    viewport: {
      width: 375,
      height: 812
    }
  },
  {
    name: 'Tablet',
    frame: '/frames/tablet-frame.png',
    viewport: {
      width: 1024,
      height: 768
    }
  }
];

// Using a proxy service to bypass CORS and capture screenshots
const SCREENSHOT_API = 'https://api.screenshotone.com/take';
const API_KEY = import.meta.env.VITE_SCREENSHOT_API_KEY;

export async function generateMockup(url: string): Promise<MockupResult> {
  try {
    // Validate URL
    const parsedUrl = new URL(url);
    
    // Ensure URL uses HTTPS
    if (parsedUrl.protocol !== 'https:') {
      return {
        error: 'Please enter a secure HTTPS URL',
        imageUrl: ''
      };
    }

    // Select a random device mockup
    const device = MOCKUP_DEVICES[Math.floor(Math.random() * MOCKUP_DEVICES.length)];

    // Generate screenshot URL with API parameters
    const params = new URLSearchParams({
      access_key: API_KEY,
      url: url,
      viewport_width: device.viewport.width.toString(),
      viewport_height: device.viewport.height.toString(),
      format: 'png',
      full_page: 'false',
      delay: '2',
      response_type: 'json'
    });

    const response = await axios.get(`${SCREENSHOT_API}?${params.toString()}`);

    if (response.data.screenshot_url) {
      toast.success('Mockup generated successfully!');
      return {
        imageUrl: response.data.screenshot_url
      };
    } else {
      throw new Error('Failed to generate screenshot');
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate mockup';
    toast.error(errorMessage);
    
    return {
      error: errorMessage,
      imageUrl: ''
    };
  }
}