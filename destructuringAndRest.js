// user object we got from the backend
const profile = {
  id: 874359,
  username: "Fireship.io",
  channelName: "Fireship",
  logo: "/images/logos/fireship-logo.png",
  subscribers: 3100000,
  categories: ["computer science", "technology", "educational"],
};

// object destructuring
const { username, logo } = profile;

// array destructuring
const [primaryCategory] = profile.categories;

// rest operator
const isLive = true;

const userPage = {
  ...profile,
  isLive: isLive,
};

// spreading an object or array creates a shallow copy of the object/array
const profileCopy = { ...profile };

console.log(profileCopy === profile); // false
