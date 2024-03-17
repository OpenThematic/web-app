/**
 * Converts seconds to a formatted time string.
 *
 * @param {int} seconds Seconds.
 *
 * @returns {string} Formatted time in the format of "mm:ss".
 */
export const formatSeconds = (seconds: number) => {
  const roundedSeconds = Math.floor(seconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const remainingSeconds = roundedSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};
