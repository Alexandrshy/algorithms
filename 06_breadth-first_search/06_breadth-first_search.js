const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
const isSeller = name => name[name.length - 1] === "m";

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @param {Object} graph Hash table
 * @returns {boolean} Search results
 */
const search = (name, graph = {}) => {
  const inner = (waited = [], visited) => {
    if (waited.length === 0) return false;
    const person = waited[0];
    const waitedClone = waited.slice(1);
    if (visited.indexOf(person) !== -1) return inner(waitedClone, visited);
    if (isSeller(person)) {
      console.log(person + " is a mango seller!");
      return true;
    }
    return inner([...waitedClone, ...graph[person]], [...visited, person]);
  };
  return inner(graph[name], []);
};

search("you", graph);
