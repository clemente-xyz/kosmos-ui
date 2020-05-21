import React from "react";

const QUASAR_LOGO_URL =
  "https://res.cloudinary.com/clementeserrano/image/upload/v1572734515/quasar-logo.png";

function QuasarIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <img src={QUASAR_LOGO_URL} height="70px" style={style} alt="Quasar app" />
  );
}

export default QuasarIcon;
