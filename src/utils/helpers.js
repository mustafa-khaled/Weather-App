export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString(undefined, options);
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleString(undefined, options);
};
