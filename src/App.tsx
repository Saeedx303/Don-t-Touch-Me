import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">ժ૦Ո't Ƭ૦ꪊᥴᕼ 𝙼𝚎</h1>
          <div className="mb-6">
            <div className="blogger-code">
              <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                {`<!-- Spotify Playlist Widget -->
<div style="max-width: 100%; margin: 20px auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <iframe 
    style="border-radius: 12px; width: 100%; max-width: 660px; display: block; margin: 0 auto;" 
    src="https://open.spotify.com/embed/playlist/24nlP8KGiXDRqN0uKmiD9x?utm_source=generator" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
  </iframe>
</div>
<!-- End Spotify Playlist Widget -->`}
              </pre>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">How to add to Blogger:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Log in to your Blogger account</li>
              <li>Go to "Theme" or "Layout" in your dashboard</li>
              <li>Click "Add a Gadget" where you want the playlist to appear</li>
              <li>Choose "HTML/JavaScript"</li>
              <li>Copy the code above and paste it into the content box</li>
              <li>Click "Save"</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;