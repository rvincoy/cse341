const ryanRoute = (req, res) => {
    res.send("Ryan");
};

const ashleyRoute = (req, res) => {
    res.send("Ashley");
};

module.exports = {
    ryanRoute,
    ashleyRoute,
};