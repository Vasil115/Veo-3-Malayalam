async function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  document.getElementById("videoOutput").innerText = "Generating video...";

  // Fake demo – actual video generation needs API access
  const response = await fetch("https://api.runwayml.com/generate-video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      prompt: prompt,
      length: 30  // 30 seconds
    })
  });

  const data = await response.json();
  document.getElementById("videoOutput").innerHTML = `
    <video controls src="${data.video_url}" width="640"></video>
  `;
  fetch. 8ea03da4-22f6-4820-aba1-190b5c639fe9:d50086421542bd27fcc23a150690db42
}
