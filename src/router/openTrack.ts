/**
 * Prefer generic track route for navigation (legacy fpsc/hat screens still resolve).
 */
import type { TrackId } from "../data/tracks.ts";

export function openTrackOptions(trackId: TrackId): { screen: "track"; trackId: TrackId; parent: null } {
  return { screen: "track", trackId, parent: null };
}

/** Legacy landing screen name — use only when a ScreenName is required without track payload. */
export function legacyTrackScreen(trackId: TrackId): "fpsc" | "hat" {
  return trackId === "hat" ? "hat" : "fpsc";
}
