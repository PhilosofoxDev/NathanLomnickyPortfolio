import "tailwindcss";
import React, { Children } from "react";
import Draggable from "react-draggable";

export default function Template({
  prioritize,
  deprioritize,
  thisRef,
  zIndex,
  locked,
  lockPos,
  children,
  className,
}) {
  return (
    <Draggable
      onStart={prioritize}
      onStop={deprioritize}
      nodeRef={thisRef}
      bounds="parent"
      disabled={locked}
      position={locked ? lockPos : null}
      defaultPosition={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
    >
      <div
        ref={thisRef}
        className={className}
        style={{
          zIndex: zIndex,
          position: "absolute",
        }}
      >
        {children}
      </div>
    </Draggable>
  );
}
