import type { ReactNode } from "react";

/**
 * Active is a component that conditionally renders its children.
 * It is used to render a component only when the `active` prop is true.
 *
 * @param {boolean} active - Whether the component should be rendered
 * @returns {ReactNode} - The component to render
 *
 * */
export const Active = ({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) => {
  if (!active) return null;
  return children;
};
