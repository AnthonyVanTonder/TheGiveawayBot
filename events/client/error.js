module.exports = async (client, error) => {
    client.logger(String(error).red.dim);
}