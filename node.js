// ===== General Purpose JS Utilities =====

// 1. Debounce - limit how often a function runs
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// 2. Throttle - ensure a function runs at most once per interval
function throttle(fn, limit = 300) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 3. Deep clone an object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 4. Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 5. Format a number as currency
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}

// 6. Capitalize first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 7. Check if a value is empty (string, array, object)
function isEmpty(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === "string") return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

// 8. Sleep / delay using Promises
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 9. Group array of objects by a key
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
}

// 10. Get unique values from an array
function unique(arr) {
  return [...new Set(arr)];
}