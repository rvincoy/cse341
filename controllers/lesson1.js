const ryanRoute = (req, res) => {
    res.send("Ryan");
};

const ashleyRoute = (req, res) => {
    res.send("Ashley");
};

const michelleRoute = (req, res) => {
    res.send("Michelle");
};

module.exports = {
    ryanRoute,
    ashleyRoute,
    michelleRoute,
};