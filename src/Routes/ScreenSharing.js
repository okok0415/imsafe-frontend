import React from "react";
class ScreenSharing extends React.Component{

    startButton = () =>{
        navigator.mediaDevices.getDisplayMedia({video:true})
            .then(function(stream){
                var video = document.querySelector('video');
                if("srcObject" in video){
                    video.srcObject = stream;
                }
                else{
                    video.src = window.URL.createObjectURL(stream);
                }
                video.onloadedmetadata = function(e) {
                    video.play();
                };
            })
            .catch(function(err){
                console.log(err.name + ": " + err.message);
            });
    };

    
    render(){
        return (
            <div>

            <video id="gum-local" autoPlay playsInline muted width="100%" height = "100%">
            </video>
            <button id="startButton" onClick = {this.startButton}>Start</button>
        
          </div>
        )
    }
}

export default ScreenSharing;