/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";

export default function MeetingPage() {
     const params = useParams();
     const router = useRouter();
     const searchParams = useSearchParams();
}
