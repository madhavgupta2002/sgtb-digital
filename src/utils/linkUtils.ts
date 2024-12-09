export function getYouTubeEmbedUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Handle youtube.com/shorts
    if (urlObj.pathname.includes('/shorts/')) {
      const videoId = urlObj.pathname.split('/shorts/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle regular youtube.com/watch?v= links
    if (urlObj.searchParams.has('v')) {
      const videoId = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtu.be links
    if (urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.pathname.substring(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
  }
  
  return url;
}

export function isYouTubeUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('youtube.com') || urlObj.hostname === 'youtu.be';
  } catch {
    return false;
  }
}