const formatToLocalISODate = (dateString, timeZoneOffset = 9) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() + timeZoneOffset);
};

export default formatToLocalISODate;
