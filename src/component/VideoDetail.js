import React from 'react';

 const VideoDetail = ({selectedVideo}) => {


    if (selectedVideo != null) {
        const srcUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
        return (
            <div>
                <div>
                    <iframe src={srcUrl}  
                    title={selectedVideo.snippet.title}  width="720" height="400"
                    />
                </div>
                <div>{selectedVideo.snippet.title}</div>
                <div>{selectedVideo.snippet.description} </div>
            </div>
        )
    }
        return <div>Loading</div>;

        
        
}

export default VideoDetail;