const renderHomepage = (req, res) => {
  try {
    res.render("homepage");
  } catch (error) {
    logError("Render login", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render login." });
  }
};

module.exports = {
  renderHomepage,
};
