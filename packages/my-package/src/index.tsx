"use client";

import { useEffect } from "react";

export function ClientComponent() {
  useEffect(() => {
    console.log("hello, client!");
  }, []);
  return <div>This is a client component from my-package</div>;
}
