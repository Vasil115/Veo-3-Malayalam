document.getElementById('generateBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('promptInput').value;
  const style = document.getElementById('styleSelect').value;

  if (!prompt) {
    alert("Please enter a video description.");
    return;
  }

  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('videoResult').classList.add('hidden');

  try {
    // 🔄 Replace with your real AI video API endpoint
    const response = await fetch('https://api.fal.com/generate-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY' // if required
      },
      body: JSON.stringify({
        prompt: prompt,
        style: style
      })
    });

    const data = await response.json();

    if (response.ok && data.video_url) {
      document.getElementById('videoPlayer').src = data.video_url;
      document.getElementById('loading').classList.add('hidden');
      document.getElementById('videoResult').classList.remove('hidden');
    } else {
      throw new Error(data.message || "Video generation failed.");
    }

  } catch (err) {
    document.getElementById('loading').classList.add('hidden');
    alert("Error: " + err.message);
  }
});
