module.exports = async (client, error, id) => {
  client.logger(`Shard #${id} Errored`.brightRed);
}