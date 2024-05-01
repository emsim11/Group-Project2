module.exports = {
    // Formats a common date that will display the date in a specific format
    // May not eliminate the need for Day.js as Day.js if a more powerful library
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
}