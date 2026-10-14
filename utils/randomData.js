
function generateRandomEmail() {
    return `test${Date.now()}@example.com`;
}

module.exports = { generateRandomEmail };