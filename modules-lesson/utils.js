// utils.js
const formatDate = (date) => {
  const userLocale = navigator.language || navigator.userLanguage;
  return date.toLocaleDateString(userLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { formatDate };
