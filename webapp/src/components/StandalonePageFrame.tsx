import type { ComponentChildren } from "preact";
import { APP_VERSION } from "@shared/app-version";
import CRTWarp from "./design/background";

interface StandalonePageFrameProps {
  title: string;
  eyebrow?: ComponentChildren;
  titleAccessory?: ComponentChildren;
  children: ComponentChildren;
}

export default function StandalonePageFrame(props: StandalonePageFrameProps) {
  return (
    <>
      <div
        class="absolute top-0 right-0 left-0 h-[1] mx-auto"
        style={{ filter: "blur(clamp(200px, 10vw, 250px))" }}
      >
        <span
          class="absolute top-0 right-0 left-0 m-0 mx-auto h-[25vh] bg-gradient-to-r w-[90vw] p-0 sm:h-[15vh] md:h-[10vh] bg-[#091588]/80 md:w-[80vw]"
          style={{
            clipPath: "polygon(0% 51%, 50% 0%, 100% 51%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
      <div className="standalone-shell">
        {/*
        <div className="standalone-brand standalone-brand-outside">
          <img src="/nodewarden-logo.svg" alt="NodeWarden logo" className="standalone-brand-logo" />
          <div>
            <span className="standalone-brand-wordmark" role="img" aria-label="NodeWarden" />
          </div>
        </div>
      */}

        <section className="w-full h-[12rem] relative bg-black rounded-xl [box-shadow:inset_0_0px_16px_rgba(255,255,255,0.1)]">
          <div className="z-10 flex flex-col justify-center items-center h-full gap-1">
            <h1 className="text-4xl font-semibold tracking-tighter">
              hexaa's vault.
            </h1>
            <p className="text-lg font-semibold tracking-tighter">
              this is a private vault, that's it. nothing special!
            </p>
          </div>
          <div className="absolute inset-0 mix-blend-exclusion">
            <CRTWarp
              color="#3B82F6"
              backgroundColor="#05010a"
              speed={0.05}
              curvature={0.23}
              scanlineStrength={0.32}
              scanlineFrequency={310}
              waveAmplitude={0.3}
              waveFrequency={2.5}
              bloom={1.5}
              bloomRadius={1}
              noise={0.16}
              vignette={0.76}
              brightness={0.8}
              pixelation={4}
              rgbShift={0.015}
              mouseReact
              mouseStrength={0.53}
              dpr={0.75}
              fps={30}
              paused={false}
              className="absolute inset-0 h-full rounded-xl"
            />
          </div>
        </section>

        <div className="border border-white/10 bg-black/30 rounded-2xl p-6 py-10 *:tracking-tighter">
          {props.eyebrow && (
            <div className="standalone-eyebrow">{props.eyebrow}</div>
          )}
          <div className="standalone-title-row">
            <h1 className="standalone-title">{props.title}</h1>
          </div>
          {props.children}
        </div>

        <div className="standalone-footer *:tracking-tighter">
          <a
            href="https://github.com/shuaiplus/NodeWarden"
            target="_blank"
            rel="noreferrer"
          >
            NodeWarden Repository
          </a>
          <span> | </span>
          <a
            href="https://github.com/shuaiplus"
            target="_blank"
            rel="noreferrer"
          >
            Author: @shuaiplus
          </a>
          <span> | </span>
          <a
            href="https://github.com/shuaiplus/NodeWarden/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="standalone-version"
          >
            v{APP_VERSION}
          </a>
        </div>
      </div>
    </>
  );
}
