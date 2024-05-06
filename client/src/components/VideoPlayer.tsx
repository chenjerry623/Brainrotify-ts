import NewWindow from 'react-new-window';

import handlePreviousVideo from '../constants/video-navigation/handlePreviousVideo';
import handleNextVideo from '../constants/video-navigation/handleNextVideo';

import left from './../images/left.png'
import right from './../images/right.png';

import { AiOutlineClose } from "react-icons/ai"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

interface VideoPlayerProps {
    videoUrls: string[],
    selectedVideo: string,
    setSelectedVideo: (url: string) => void,
    uploading: boolean,
}

const VideoPlayer = (props: VideoPlayerProps) => {

    const handlePreviousVideoCallback = () => {
        handlePreviousVideo(props.videoUrls, props.selectedVideo, props.setSelectedVideo);
    }

    const handleNextVideoCallback = () => {
        handleNextVideo(props.videoUrls,
            props.selectedVideo, props.setSelectedVideo);
    }

    return (

        <div>
            {(props.selectedVideo && !(props.uploading)) && (
                <NewWindow>
                    <div className='player-bg'>
                        <div className="player-container">
                            {/*TODO: video isn't centered properly */}
                            <div className='video-bg'>
                                <div className='button-container'>
                                    <div
                                        onClick={() => handlePreviousVideoCallback()}
                                        className="prev-button"
                                    >
                                        <BiChevronUp size="30" color="#FFFFFF" />
                                    </div>

                                    <div
                                        onClick={() => handleNextVideoCallback()}
                                        className="next-button"
                                    >
                                        <BiChevronDown size="30" color="#FFFFFF" />
                                    </div>
                                </div>
                                <video controls src={props.selectedVideo} style={{ height: '100vh' }} loop autoPlay>
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                        </div>
                    </div>
                </NewWindow>
            )}
        </div>


    )

}

export default VideoPlayer;