const blacklist = [
  "dealer_rating",
  "load_length",
  "load_height",
  "payload",
  "towing_weight",
  "reserved",
  "additional_tax",
  "seller"
];

const checkBlacklist = (field) => {
  for (let i = 0; i < blacklist.length; i++) {
    if (field.includes(blacklist[i])) return false;
  }
  return true;
};

module.exports = {
  checkBlacklist,
};
