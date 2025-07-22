"use client";
import { useEffect, useRef } from "react";

export default function DunsSeal() {
  const ref = useRef(null);

  useEffect(() => {
    // Dynamic import inside useEffect ensures client-only execution
    import("postscribe").then((module) => {
      module.default(
        ref.current,
        `<script src="https://dunsregistered.dnb.com"></script>`
      );
    });
  }, []);

  return <div ref={ref}></div>;
}
