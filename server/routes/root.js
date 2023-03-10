module.exports = async function (route, opts) {
  route.get('/', async function (request, reply) {
    return { root: true }
  })
}
