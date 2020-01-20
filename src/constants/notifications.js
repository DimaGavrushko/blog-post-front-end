/**
 * All valid positions of notifications.
 */
export const POSITION_BR = "br";
export const POSITION_BC = "bc";
export const POSITION_BL = "bl";
export const POSITION_TR = "tr";
export const POSITION_TC = "tc";
export const POSITION_TL = "tl";

/**
 * All valid types of notifications.
 */
export const TYPE_PRIMARY = "primary";
export const TYPE_DANGER = "danger";
export const TYPE_WARNING = "warning";
export const TYPE_SUCCESS = "success";
export const TYPE_INFO = "info";

/**
 * Default timer of notification to close.
 * Can be changed.
 */
export const TIMER = 4000;

/**
 * Default position of notifications to show.
 * Can be changed to one of: 'br', 'bl', 'bc'.
 */
export const DEFAULT_POSITION = POSITION_BR;

/**
 * All valid positions for notifications.
 * Can not be changed.
 */
export const POSITIONS = [
  POSITION_BR,
  POSITION_BC,
  POSITION_BL,
  POSITION_TR,
  POSITION_TC,
  POSITION_TL
];

/**
 * All valid types of notifications.
 * Can not be changed.
 */
export const TYPES = [
  TYPE_PRIMARY,
  TYPE_DANGER,
  TYPE_INFO,
  TYPE_SUCCESS,
  TYPE_WARNING
];
