import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

export default function VideoPlayer(){
    const videoRef = useRef(); //videoRef variable that gives the video component access to native HTML DOM methods and properties
    return(
        // cloud_name is the name of the cloudinary account
        <CloudinaryContext cloud_name="sayantika"> 
            <div>
                <Video 
                    publicId="v1642571225/final_oj5fxx" //unique identifier with which Cloudinary generates the video URL
                    width="100%"
                    controls //this includes HTML video functionalities like play, pause, etc
                    innerRef={videoRef} //accesses video functionalities through the videoRef variable
                />
            </div>
        </CloudinaryContext>
    );
}