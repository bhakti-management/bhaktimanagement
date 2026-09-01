"use client";

import React, { useState } from "react";
import Container from "./Container";
import Section from "./Section";

type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ClientLogosGridSection() {
  const [isPaused, setIsPaused] = useState(false);

  // =========================================================
  // GOVERNMENT CLIENTS
  // =========================================================
  const govClients: ClientLogo[] = [
    {
      src: "/assets/gov-logos/BISAG2.svg",
      alt: "BISAG",
      width: 85,
      height: 55,
    },
    {
      src: "/assets/gov-logos/CWC2.svg",
      alt: "CWC",
      width: 135,
      height: 48,
    },
    {
      src: "/assets/gov-logos/FED2.svg",
      alt: "Forest and Environment Department",
      width: 65,
      height: 55,
    },
    {
      src: "/assets/gov-logos/GIL2.svg",
      alt: "GIL",
      width: 90,
      height: 55,
    },
    {
      src: "/assets/gov-logos/GNFC2.svg",
      alt: "GNFC",
      width: 70,
      height: 55,
    },
    {
      src: "/assets/gov-logos/GNLU2.svg",
      alt: "GNLU",
      width: 65,
      height: 55,
    },
    {
      src: "/assets/gov-logos/GV2.svg",
      alt: "Gujarat Vidyapith",
      width: 65,
      height: 55,
    },
    {
      src: "/assets/gov-logos/IC2.svg",
      alt: "IC",
      width: 135,
      height: 42,
    },
  ];

  // =========================================================
  // PRIVATE CLIENTS
  // =========================================================
  const privateClients: ClientLogo[] = [
    {
      src: "/assets/private-logos/caparo.svg",
      alt: "Caparo",
      width: 145,
      height: 48,
    },
    {
      src: "/assets/private-logos/JBM.svg",
      alt: "JBM",
      width: 135,
      height: 48,
    },
    {
      src: "/assets/private-logos/KU.svg",
      alt: "Kamdhenu University",
      width: 110,
      height: 52,
    },
    {
      src: "/assets/private-logos/ness.svg",
      alt: "Nessa",
      width: 65,
      height: 50,
    },
    {
      src: "/assets/private-logos/nirmit.svg",
      alt: "Nirmiti Group",
      width: 145,
      height: 42,
    },
    {
      src: "/assets/private-logos/polyrub.svg",
      alt: "Polyrub",
      width: 150,
      height: 28,
    },
  ];

  // =========================================================
  // LOGO CARD
  // =========================================================
  const LogoCard = ({
    client,
    type,
    idx,
  }: {
    client: ClientLogo;
    type: "gov" | "private";
    idx: number;
  }) => {
    return (
      <div
        key={`${type}-${idx}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="
          bg-white
          rounded-lg
          w-[180px]
          h-[82px]
          shrink-0
          flex
          items-center
          justify-center
          overflow-hidden
          border
          border-slate-100
          cursor-pointer
          transition-all
          duration-200
          hover:border-slate-200
          hover:shadow-sm
        "
      >
        <div
          className="
            w-[160px]
            h-[62px]
            flex
            items-center
            justify-center
          "
        >
          <img
            src={client.src}
            alt={client.alt}
            width={client.width}
            height={client.height}
            className="
              object-contain
              object-center
              block
            "
            style={{
              width: `${client.width}px`,
              height: `${client.height}px`,
            }}
          />
        </div>
      </div>
    );
  };

  // =========================================================
  // MARQUEE STYLE
  // =========================================================
  const marqueeStyle = {
    animationPlayState: isPaused ? "paused" : "running",
  } as React.CSSProperties;

  return (
    <Section
      className="
        bg-white
        text-center
        !py-12
        lg:!py-16
        overflow-hidden
        border-t
        border-slate-100
      "
    >
      <Container className="flex flex-col items-center !px-0 max-w-full">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="px-6 lg:px-16 xl:px-24 mb-10 text-center">
          <h2
            className="
              text-2xl
              lg:text-[32px]
              font-bold
              text-brand-navy
              mb-2
              font-sans
              tracking-tight
            "
          >
            Trusted Across Government & Private Sectors
          </h2>

          <p
            className="
              text-[14px]
              text-slate-500
              max-w-[600px]
              mx-auto
              leading-relaxed
            "
          >
            Delivering high-compliance workforce solutions to premier public
            utilities and leading industrial enterprises.
          </p>
        </div>

        {/* =====================================================
            LOGO MARQUEE
        ====================================================== */}
        <div className="w-full flex flex-col gap-5 relative">

          {/* LEFT FADE */}
          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-12
              lg:w-24
              bg-gradient-to-r
              from-white
              to-transparent
              z-10
              pointer-events-none
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-12
              lg:w-24
              bg-gradient-to-l
              from-white
              to-transparent
              z-10
              pointer-events-none
            "
          />

          {/* ===================================================
              GOVERNMENT ROW
          ==================================================== */}
          <div className="w-full overflow-hidden">
            <div
              className="
                animate-marquee-right
                flex
                gap-4
                py-2
                w-max
              "
              style={{
                ...marqueeStyle,
                animationDuration: "35s",
              }}
            >
              {[
                ...govClients,
                ...govClients,
                ...govClients,
                ...govClients,
              ].map((client, idx) => (
                <LogoCard
                  key={`gov-${idx}`}
                  client={client}
                  type="gov"
                  idx={idx}
                />
              ))}
            </div>
          </div>

          {/* ===================================================
              PRIVATE ROW
          ==================================================== */}
          <div className="w-full overflow-hidden">
            <div
              className="
                animate-marquee-left
                flex
                gap-4
                py-2
                w-max
              "
              style={{
                ...marqueeStyle,
                animationDuration: "40s",
              }}
            >
              {[
                ...privateClients,
                ...privateClients,
                ...privateClients,
                ...privateClients,
                ...privateClients,
              ].map((client, idx) => (
                <LogoCard
                  key={`private-${idx}`}
                  client={client}
                  type="private"
                  idx={idx}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}