/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";

export default function MeetingPage() {
     const params = useParams();
     const router = useRouter();
     const searchParams = useSearchParams();
     const callId = params.id;
     const name = searchParams.get("name") || "anonymous";

     const [user, setUser] = useState(null);
     const [token, setToken] = useState(null);
     const [error, setError] = useState(null);
}
