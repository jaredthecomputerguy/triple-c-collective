"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./steam.module.css";

type SmokeParticle = {
  id: number;
  left: string;
  width: number;
  height: number;
  duration: number;
  delay: number;
  driftX: number;
  scaleTo: number;
  opacity: number;
  blur: number;
};

interface CannabisSmokeProps {
  spawnIntervalMs?: number;
  spawnDurationMs?: number;
  cleanupDelayMs?: number;
}

export const Steam = ({
  spawnIntervalMs = 220,
  spawnDurationMs = 12000,
  cleanupDelayMs = 18000,
}: CannabisSmokeProps) => {
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const nextId = useRef(0);

  useEffect(() => {
    const spawnParticle = () => {
      const id = nextId.current++;

      const particle: SmokeParticle = {
        id,
        left: `${8 + Math.random() * 84}%`,
        width: 80 + Math.random() * 100,
        height: 50 + Math.random() * 70,
        duration: 7 + Math.random() * 5,
        delay: Math.random() * 0.6,
        driftX: -80 + Math.random() * 160,
        scaleTo: 1.8 + Math.random() * 1.4,
        opacity: 0.2 + Math.random() * 1,
        blur: 10 + Math.random() * 10,
      };

      setParticles((prev) => [...prev, particle]);

      window.setTimeout(
        () => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        },
        (particle.duration + particle.delay) * 1000,
      );
    };

    const intervalId = window.setInterval(() => {
      const burstCount = Math.random() > 0.65 ? 2 : 1;

      for (let i = 0; i < burstCount; i++) {
        spawnParticle();
      }
    }, spawnIntervalMs);

    const stopTimeout = window.setTimeout(() => {
      clearInterval(intervalId);
    }, spawnDurationMs);

    const cleanupTimeout = window.setTimeout(() => {
      setIsVisible(false);
    }, cleanupDelayMs);

    return () => {
      clearInterval(intervalId);
      clearTimeout(stopTimeout);
      clearTimeout(cleanupTimeout);
    };
  }, [spawnIntervalMs, spawnDurationMs, cleanupDelayMs]);

  if (!isVisible) return null;

  return (
    <div className={styles.container} aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.smoke}
          style={
            {
              left: particle.left,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              opacity: particle.opacity,
              filter: `blur(${particle.blur}px)`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--drift-x": `${particle.driftX}px`,
              "--scale-to": particle.scaleTo,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
