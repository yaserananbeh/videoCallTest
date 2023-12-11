import { useMeeting } from "@videosdk.live/react-sdk";
import React from "react";
import ParticipantView from "./ParticipantView";

export default function VideoViewContainer() {
  const { participants } = useMeeting();
  return (
    <>
      <div>VideoViewContainer</div>
      {[...participants.keys()].map((participantId) => (
        <ParticipantView participantId={participantId} key={participantId} />
      ))}
    </>
  );
}
