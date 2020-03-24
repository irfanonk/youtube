import React from 'react';

 const VideoDetail = ({selectedVideo}) => {


    if (selectedVideo != null) {
        const srcUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
        return (
            <div className="card">
                <div className="image">
                    <iframe src={srcUrl}  
                    title={selectedVideo.snippet.title}  width="100%" height="500"
                    />
            </div>
            <div className="content">
                <h1>{selectedVideo.snippet.title}</h1>
                <h3>{selectedVideo.snippet.description} </h3>
            </div>
            </div>
        )
    }
        return <div>Loading</div>;

        
        
}

export default VideoDetail;