module.exports = async (client, event, id) => {
  client.logger(`Shard #${id} Disconnected`.brightRed);
}