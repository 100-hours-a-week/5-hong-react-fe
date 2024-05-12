export const truncateCount = (count) => {
  if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + 'M';

  if (count >= 1_000) return (count / 1_000).toFixed(0) + 'K';

  return count.toString();
};

export const truncateTitle = (title) => {
  return title.length > 25 ? `${title.slice(0, 25)}` : title;
};
