module.exports = async (client, id) => {
  try {
    client.logger(`Shard #${id} Ready`.brightGreen);
  } catch {
    /* */ }
}