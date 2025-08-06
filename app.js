// export data from one file to another file

// export let x = 10; // does'nt run in node but can run in js
// export let y = 20; // does'nt run in node but can run in js

module.exports = {
  x: 10,
  y: 20,
  z: function () {
    // function
    return 10;
  },
};

// Another method to write the export to get data from one file to another
// const app = {
//   x: 10,
//   y: 20,
//   z: function () {
//     return 10;
//   },
// };

// module.exports = app;
