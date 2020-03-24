import React from 'react';
import VideoItem from './VideoItem';



const VideoList = ({videosArray, onVideoSelect}) => {
    console.log('VideoArray:',videosArray)
    const renderedList = videosArray.map((video) => {
        return (
                <div className="ui styled fluid accordion"
                 key={video.id.videoId}>
                   <VideoItem   
                   onVideoSelect={onVideoSelect}
                   video={video} />
                </div>
            )
        })
    
    return (
        <div>
        <div>{renderedList}</div>
        </div>
    )
}

export default VideoList;