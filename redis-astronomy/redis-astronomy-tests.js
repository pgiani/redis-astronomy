// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by redis-astronomy.js.
import { name as packageName } from "meteor/pgiani:redis-astronomy";

// Write your tests here!
// Here is an example.
Tinytest.add('redis-astronomy - example', function (test) {
  test.equal(packageName, "redis-astronomy");
});
