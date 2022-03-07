module.exports = async (client, rateLimitData) => {
    client.logger(JSON.stringify(rateLimitData).grey.italic.dim);
}