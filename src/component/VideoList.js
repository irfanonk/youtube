import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';



const VideoList = ({videosArray, onVideoSelect}) => {
    console.log('VideoArray:',videosArray)
    const renderedList = videosArray.map((video) => {
        return (
                <div 
                 key={video.id.videoId}>
                   <VideoItem   
                   onVideoSelect={onVideoSelect}
                   video={video} />
                </div>
            )
        })
    
    return <div className="video-list">{renderedList}</div>
}

export default VideoList;