import React from "react";

import { IconProps } from "../types";

function ProfilesIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg style={style} height={height} viewBox="0 0 100 100">
      <circle fill={color} cx="34.5" cy="40.4" r="13.3" />
      <circle fill={color} cx="66.3" cy="35.1" r="13.3" />
      <path
        fill={color}
        d="M89.4 64.3c-2.6-7.3-8.6-13-16.1-15.2-.2-.1-.5 0-.7.1-1.9 1-4 1.5-6.2 1.5s-4.4-.6-6.2-1.5c-.2-.1-.5-.1-.7-.1-4.1 1.2-7.8 3.5-10.7 6.5 4.8 3 8.5 7.6 10.5 12.9h27.2c2.1 0 3.6-2.2 2.9-4.2zM57.6 69.6c-.1-.4-.3-.7-.4-1.1-.5-1.2-1-2.3-1.7-3.3 0-.1-.1-.1-.1-.2-1-1.6-2.1-3-3.4-4.4l-.1-.1c-1.3-1.3-2.8-2.5-4.4-3.5-1.8-1.1-3.8-2.1-6-2.7-.2-.1-.5 0-.7.1-1.9 1-4 1.5-6.2 1.5s-4.4-.6-6.2-1.5c-.2-.1-.5-.1-.7-.1-7.5 2.2-13.5 7.9-16.1 15.2-.7 2 .8 4.2 2.9 4.2h40.2c2.1.1 3.6-2 2.9-4.1z"
      />
    </svg>
  );
}

export default ProfilesIcon;
