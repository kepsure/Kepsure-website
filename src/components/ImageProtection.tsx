"use client";

import { useEffect } from "react";

/**
 * Client-side guard that disables the right-click "Save image as…" menu
 * for <img> elements (and any element flagged with data-no-download).
 *
 * Note: nothing in a browser can fully prevent downloading — DevTools / the
 * Network tab will always expose source assets. This is a casual deterrent.
 */
export function ImageProtection() {
  useEffect(() => {
    function onContextMenu(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "IMG" ||
        target.closest("[data-no-download]")
      ) {
        e.preventDefault();
      }
    }
    function onDragStart(e: DragEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "IMG" ||
        target.closest("[data-no-download]")
      ) {
        e.preventDefault();
      }
    }
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);
  return null;
}
