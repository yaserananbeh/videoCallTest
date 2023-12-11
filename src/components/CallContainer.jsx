import { useMeeting } from "@videosdk.live/react-sdk";
import React, { useEffect } from "react";
import VideoViewContainer from "./VideoViewContainer";

export default function CallContainer() {
  const { join } = useMeeting({
    onParticipantJoined: (participant) => {
      console.log(participant, "joined");
    },
    onParticipantLeft: (participant) => {
      console.log(participant, "left");
    },
  });
  useEffect(() => {
    join();
  }, []);
  return (
    <div style={{ backgroundColor: "gray", color: "white" }}>
      <VideoViewContainer />
    </div>
  );
}
