export function getTimeSince(date: Date) {
  let seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) return Math.floor(interval) + " yrs ago";

  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " mos ago";

  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";

  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hrs ago";

  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " mins ago";

  return Math.floor(seconds) + " secs ago";
}
