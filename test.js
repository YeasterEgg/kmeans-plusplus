// not a real test!
// also since it's kind of random, not so easy to run a test
const Clusterer = require('./index.js')

const side = 10

const data = Array.from({ length: 10 }, () => [
	Math.floor(Math.random() * side),
	Math.floor(Math.random() * side),
])

const clusterer = new Clusterer(data)

const { centroids, attributions, iterations } = clusterer.clusterize(4)

console.log('iterations', iterations)
console.log('attributions', attributions)
console.log('centroids', centroids)
