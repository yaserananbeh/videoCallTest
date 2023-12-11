import React from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import CallContainer from "./CallContainer";
export default function CustomMeetingProvider() {
  const videoToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhNzhmNTY2Zi1jZWY0LTRlMjQtOTlkNy1iMmJkM2I0MjE0YjYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMDg1NDY2MSwiZXhwIjoxODU4NjQyNjYxfQ.Y04gFZvATYvYFaBBMT7RlD1W9TY693n79sBBMGi4d0k";
  const meetingId = "3glm-kz9q-cmq4";
  if (!videoToken) return <></>;
  return (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Participant",
        maxResolution: "hd",
        // participantId: "teacher",
      }}
      token={videoToken}
    >
      <CallContainer />
    </MeetingProvider>
  );
}
