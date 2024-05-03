module.exports = {
  // Formats Common Date in Specific Format (NOTE: Might Still Need Day.js / More Powerful Library)
  format_date: (date) => {
      // Check if date is a valid Date object
      if (!(date instanceof Date)) {
          return "Invalid Date";
      }

      // Format Date as MM/DD/YYYY
      return date.toLocaleDateString();
  },
};