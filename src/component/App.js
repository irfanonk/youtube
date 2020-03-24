import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'



export default class App extends React.Component {
    
    state = {submittedVideos: [], selectedVideo: null}

    
    onUserSubmit = async (submittedWord) => {
        const response =  await youtube.get('/search', {
            params: {q:submittedWord}
        });
        //console.log("app props:",submittedWord)
        //console.log('response', response.data)
        //console.log('response items', response.data.items)
        this.setState({
            submittedVideos:response.data.items,
            selectedVideo:response.data.items[0],
        })
        //console.log('submittedVideosList:',this.state.submittedVideos)

    }
     
    onVideoSelect = (video) => {
        console.log("selected video",video)
        this.setState({selectedVideo:video})
    }

    
    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <div className="row">
                <SearchBar onUserSubmit={this.onUserSubmit}/>
                </div>
                <div className="row">
                <VideoDetail selectedVideo={this.state.selectedVideo} />
                </div>
                <div className="row"  style={{marginTop: '10px'}}>
                <VideoList 
                onVideoSelect = {this.onVideoSelect}
                videosArray={this.state.submittedVideos}/>
                </div>
            </div>
        )
    }
}
