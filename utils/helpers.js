module.exports = {
    // Formats Common Date in Specific Format (NOTE: Might Still Need Day.js / More Powerful Library)
    format_date: (date) => {
      // Format Date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
};