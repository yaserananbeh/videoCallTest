import React from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import CallContainer from "./CallContainer";
export default function CustomMeetingProvider() {
  const videoToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhNzhmNTY2Zi1jZWY0LTRlMjQtOTlkNy1iMmJkM2I0MjE0YjYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMDg1NDY2MSwiZXhwIjoxODU4NjQyNjYxfQ.Y04gFZvATYvYFaBBMT7RlD1W9TY693n79sBBMGi4d0k";
  const meetingId = "0h77-z2cr-xajl";
  if (!videoToken) return <></>;
  return (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: false,
        webcamEnabled: false,
        name: "Participant",
        maxResolution: "hd",
      }}
      token={videoToken}
      joinWithoutUserInteraction
      reinitialiseMeetingOnConfigChange={false}
    >
      <CallContainer />
    </MeetingProvider>
  );
}
