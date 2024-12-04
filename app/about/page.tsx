"use client";

import * as React from "react";
import { RatingDisplay } from "@fluentui/react-rating";


export default function Page() {
  return (
    <div>
      <RatingDisplay value={1} />
      <RatingDisplay value={3.7} />
      <RatingDisplay value={3.9} />
      <RatingDisplay value={5} />
    </div>
  );
};

