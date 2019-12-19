/**
 * All valid positions of notifications.
 */
export const POSITON_BR = "br";
export const POSITON_BC = "bc";
export const POSITON_BL = "bl";
export const POSITON_TR = "tr";
export const POSITON_TC = "tc";
export const POSITON_TL = "tl";

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
export const DEFAULT_POSITION = POSITON_BR;

/**
 * All valid positions for notifications.
 * Can not be changed.
 */
export const POSITIONS = [
  POSITON_BR,
  POSITON_BC,
  POSITON_BL,
  POSITON_TR,
  POSITON_TC,
  POSITON_TL
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

/**
 * messages of notifications.
 */
export const MSG = {
  USER_AUTH_SUCCESS: "user login is successful",
  USER_PROFILE_UPDATE_SUCCESS: "user profile is updated",
  USER_NOT_AUTHORIZED: "user not authorized",
  USER_AUTH_ERROR: "user login is not successful",
  USER_PAGE_ACCESS_ERROR: "page access error"
};
