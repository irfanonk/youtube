import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    //console.log(video)
    
    
    
    return (
        //with onClick we shoul call video and onVideoSelect togather
        //so we need a function below with argument video
        <div onClick={() => onVideoSelect(video)}className='ui horizontal segments'>
            <div clasname='ui segment'>
            <img  src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title}/>
            </div> 
            <div clasname='ui segment' style={{verticalAlign:'center'}}>
            {video.snippet.title}
            </div>

        </div>
    )
}
export default VideoItem;