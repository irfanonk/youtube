import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    //console.log(video)
    
    
    
    return (
        //with onClick we shoul call video and onVideoSelect togather
        <div onClick={() => onVideoSelect(video)} className="ui link cards">
            <div className="card">
                <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                </div>
                <div className="content">
                <div className="header">{video.snippet.title}</div>
                </div>
            </div>
        </div>
            
    )
}
export default VideoItem;