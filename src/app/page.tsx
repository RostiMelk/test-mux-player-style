import MuxPlayer from "@mux/mux-video-react";
import MuxTheme from "player.style/yt/react";

const PLAYBACK_ID = "4XN6dqxPTZJPU021TuSGIHPaOuKQkrxHF";

export default function Home() {
  return (
    <main>
      <MuxTheme
        style={{
          width: "100%",
        }}
      >
        <MuxPlayer
          poster={`https://image.mux.com/${PLAYBACK_ID}/thumbnail.jpg`}
          slot="media"
          className="overflow-hidden"
          playbackId={PLAYBACK_ID}
          streamType="on-demand"
          playsInline
          crossOrigin
          disablePictureInPicture={true}
          disableCookies={true}
          disableTracking={true}
        />
      </MuxTheme>
    </main>
  );
}
