const serverError = (req, res) => {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
    return;
};
export default serverError;
