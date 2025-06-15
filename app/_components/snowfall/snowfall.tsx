"use client";

/**
 * Based on react-snowfall (MIT License)
 * Original author: chenjj
 * https://github.com/chenjj/react-snowfall
 */

import { useEffect, useRef, type JSX } from "react";

import {
  SnowfallCanvas,
  type SnowfallCanvasConfig,
} from "@/app/_components/snowfall/snowfall-canvas";
import { defaultConfig } from "@/app/_components/snowfall/snowflake";
import {
  useComponentSize,
  useDeepMemo,
  useSnowfallStyle,
} from "@/app/_components/snowfall/snowfall-hooks";

export interface SnowfallProps extends Partial<SnowfallCanvasConfig> {
  /**
   * Any style properties that will be passed to the canvas element.
   */
  style?: React.CSSProperties;
}

export const Snowfall = ({
  color = defaultConfig.color,
  changeFrequency = defaultConfig.changeFrequency,
  radius = defaultConfig.radius,
  speed = defaultConfig.speed,
  wind = defaultConfig.wind,
  rotationSpeed = defaultConfig.rotationSpeed,
  opacity = defaultConfig.opacity,
  snowflakeCount = 150,
  images,
  style,
}: SnowfallProps = {}): JSX.Element => {
  const mergedStyle = useSnowfallStyle(style);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // @ts-ignore
  const canvasSize = useComponentSize(canvasRef);

  const config = useDeepMemo<SnowfallCanvasConfig>({
    color,
    changeFrequency,
    radius,
    speed,
    wind,
    rotationSpeed,
    images,
    snowflakeCount,
    opacity,
  });

  // A reference to the config used for creating the initial instance
  const configRef = useRef(config);

  const snowfallCanvasRef = useRef<SnowfallCanvas>(null);

  useEffect(() => {
    if (!snowfallCanvasRef.current && canvasRef.current) {
      snowfallCanvasRef.current = new SnowfallCanvas(
        canvasRef.current,
        configRef.current,
      );
    }

    return () => {
      snowfallCanvasRef.current?.pause();
      // @ts-ignore
      snowfallCanvasRef.current = undefined;
    };
  }, []);

  useEffect(() => {
    if (snowfallCanvasRef.current) {
      snowfallCanvasRef.current.updateConfig(config);
    }
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      height={canvasSize.height}
      width={canvasSize.width}
      style={mergedStyle}
      data-testid="SnowfallCanvas"
    />
  );
};

export default Snowfall;
