"use client";

import { useEffect, useState, useRef } from "react";
import {
  StreamCall,
  useStreamVideoClient,
  SpeakerLayout,
  CallControls,
  StreamTheme,
} from "@stream-io/video-react-sdk";

import { TranscriptPanel } from "@/app/components/transcript";

import "@stream-io/video-react-sdk/dist/css/styles.css";

export default function MeetingRoom({ callId, onLeave, userId }) {}