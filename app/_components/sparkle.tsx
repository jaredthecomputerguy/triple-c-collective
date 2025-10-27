import { Logger } from "@/lib/logger";
import { useEffect, useRef } from "react";

const logger = new Logger();

const spriteSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg==";
const spriteCoords = [0, 6, 13, 20];

const flickerSpeedConstants = {
  slowest: 50,
  slower: 20,
  slow: 12,
  normal: 7,
  fast: 4,
  faster: 2,
  fastest: 0
};

// Types
type SparkleProps = {
  color?: string | string[];
  count?: number;
  minSize?: number;
  maxSize?: number;
  overflowPx?: number;
  fadeOutSpeed?: number;
  newSparkleOnFadeOut?: boolean;
  flicker?: boolean;
  flickerSpeed?: keyof typeof flickerSpeedConstants;
};

type Sparkle = {
  position: {
    x: number;
    y: number;
  };
  size: number;
  opacity: number;
  color: string;
  variant: number;
};

// Helper functions
const getSpriteVariant = (): number => {
  return spriteCoords[Math.floor(Math.random() * spriteCoords.length)];
};

const getOpacity = (): number => {
  return Math.random();
};

const randomHexColor = (): string => {
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  return `#${`000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(
    -6
  )}`;
};

const Sparkle = ({
  color = "#FFF",
  count = 50,
  minSize = 5,
  maxSize = 8,
  overflowPx = 20,
  fadeOutSpeed = 50,
  newSparkleOnFadeOut = true,
  flicker = true,
  flickerSpeed = "normal"
}: SparkleProps) => {
  // Refs
  const sparkleWrapperRef = useRef<HTMLSpanElement>(null);
  const sparkleCanvasRef = useRef<HTMLCanvasElement>(null);
  const sparkleContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Assigns fresh values to an existing sparkle

  // Create initial sparkles

  // Update sparkles animation

  // Resize our canvas when the parent resizes

  // Used in ResizeObserver

  // Start animation

  // End animation
  const end = (): void => {
    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
    sparklesRef.current = [];
  };

  // biome-ignore lint: This is a custom hook
  useEffect(() => {
    const start = (): void => {
      createSparkles();
      drawSparkles();
      updateSparkles();
    };

    // Get color based on props
    const getColor = (): string => {
      let chosenColor: string;
      if (color === "random") {
        chosenColor = randomHexColor();
      } else if (Array.isArray(color)) {
        // Choose a random color from the array
        chosenColor = color[Math.floor(Math.random() * color.length)];
      } else {
        chosenColor = color;
      }
      return chosenColor;
    };

    // Generate random sparkle size
    const randomSparkleSize = (): number => {
      return Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
    };

    const recreateSparkle = (existingSparkle: Sparkle): Sparkle => {
      if (!sparkleCanvasRef.current) {
        return existingSparkle;
      }

      const size = randomSparkleSize();
      return {
        // Subtract size so sparkles don't get cut off by the edge of the canvas
        position: {
          x: Math.floor(
            Math.random() * (sparkleCanvasRef.current.width - size)
          ),
          y: Math.floor(
            Math.random() * (sparkleCanvasRef.current.height - size)
          )
        },
        size,
        opacity: getOpacity(),
        color: getColor(),
        variant: getSpriteVariant()
      };
    };

    // Create a new sparkle
    const createSparkle = (): Sparkle => {
      return recreateSparkle({
        position: { x: 0, y: 0 },
        size: 0,
        opacity: 0,
        color: "",
        variant: 0
      });
    };

    const createSparkles = (): void => {
      sparklesRef.current = [];
      // Create `count` number of sparkles
      for (let i = 0; i < count; i += 1) {
        sparklesRef.current.push(createSparkle());
      }
    };

    // Draw sparkles on canvas
    const drawSparkles = (): void => {
      if (
        !sparkleCanvasRef.current ||
        !sparkleContextRef.current ||
        !spriteRef.current
      ) {
        return;
      }

      // Clear canvas
      sparkleContextRef.current.clearRect(
        0,
        0,
        sparkleCanvasRef.current.width,
        sparkleCanvasRef.current.height
      );

      // Draw each sparkle
      sparklesRef.current.forEach((sparkle) => {
        if (!sparkleContextRef.current || !spriteRef.current) return;

        sparkleContextRef.current.save();
        sparkleContextRef.current.globalAlpha = sparkle.opacity;
        sparkleContextRef.current.drawImage(
          spriteRef.current,
          sparkle.variant, // show different sparkle styles
          0,
          7,
          7,
          sparkle.position.x,
          sparkle.position.y,
          sparkle.size,
          sparkle.size
        );

        // Tint with the color
        if (sparkle.color) {
          sparkleContextRef.current.globalCompositeOperation = "source-atop";
          sparkleContextRef.current.globalAlpha = 0.6;
          sparkleContextRef.current.fillStyle = sparkle.color;
          sparkleContextRef.current.fillRect(
            sparkle.position.x,
            sparkle.position.y,
            sparkle.size,
            sparkle.size
          );
        }

        sparkleContextRef.current.restore();
      });
    };

    const updateSparkles = (): void => {
      const flickerSpeedConstant = flickerSpeedConstants[flickerSpeed];

      animationFrameRef.current = window.requestAnimationFrame((time) => {
        // Integer of current time. Useful for events that we want to do
        // less frequently than any animation frame.
        const currentTimeInt = Math.floor(time);

        // Update sparkles by doing some or all of the following:
        //  - change opacity
        //  - change position
        //  - change sprite slice to add "flicker" effect
        sparklesRef.current.forEach((sparkle) => {
          // If we refactor this, don't reassign to the sparkle param.
          sparkle.opacity -= 0.001 * fadeOutSpeed;

          // Sometimes change the sparkle variant for a "flicker" effect
          if (flicker) {
            if (
              currentTimeInt %
                Math.floor(Math.random() * flickerSpeedConstant + 1) ===
              0
            ) {
              sparkle.variant = getSpriteVariant();
            }
          }

          // Sparkle has faded out
          if (sparkle.opacity < 0) {
            // Either replace the sparkle with a brand new one or
            // reset the opacity
            if (newSparkleOnFadeOut) {
              const newSparkle = recreateSparkle(sparkle);
              sparkle.position = newSparkle.position;
              sparkle.size = newSparkle.size;
              sparkle.opacity = newSparkle.opacity;
              sparkle.color = newSparkle.color;
              sparkle.variant = newSparkle.variant;
            } else {
              sparkle.opacity = getOpacity();
            }
          }
        });

        // Draw the updated sparkles
        drawSparkles();

        // Continue to update sparkles
        updateSparkles();
      });
    };

    const sizeCanvas = (parentWidth: number, parentHeight: number): void => {
      if (!sparkleCanvasRef.current) {
        return;
      }

      // Size the canvas
      sparkleCanvasRef.current.width = parentWidth + 2 * overflowPx;
      sparkleCanvasRef.current.height = parentHeight + 2 * overflowPx;
    };

    const setupResizeObserver = () => {
      if (!sparkleWrapperRef.current) return;

      const parentStyle = window.getComputedStyle(
        sparkleWrapperRef.current.parentNode as Element
      );
      const boxSizing = parentStyle.getPropertyValue("box-sizing");
      const isHorizontalWritingMode =
        parentStyle.getPropertyValue("writing-mode") === "horizontal-tb";

      // Clean up previous observer if it exists
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      // Create new observer
      resizeObserverRef.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { blockSize, inlineSize } = entry.borderBoxSize[0];
          const [width, height] = isHorizontalWritingMode
            ? [inlineSize, blockSize]
            : [blockSize, inlineSize];
          sizeCanvas(width, height);
        }
      });

      resizeObserverRef.current.observe(
        sparkleWrapperRef.current.parentNode as Element,
        { box: boxSizing as ResizeObserverBoxOptions }
      );
    };
    if (!sparkleCanvasRef.current) {
      logger.warn("No sparkles today :( The canvas did not render.");
      return;
    }

    // Create sprite
    const sprite = new Image();
    sprite.src = spriteSrc;
    spriteRef.current = sprite;

    sparkleContextRef.current = sparkleCanvasRef.current.getContext("2d");
    setupResizeObserver();
    start();

    // Cleanup function
    return () => {
      end();
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [
    color,
    maxSize,
    minSize,
    count,
    fadeOutSpeed,
    flicker,
    flickerSpeed,
    newSparkleOnFadeOut,
    overflowPx
  ]);

  return (
    <span
      ref={sparkleWrapperRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
        position: "absolute",
        top: `-${overflowPx}px`,
        left: `-${overflowPx}px`,
        pointerEvents: "none"
      }}
    >
      <canvas ref={sparkleCanvasRef} />
    </span>
  );
};

export default Sparkle;
