const healthCheck = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Business Software API is running",
    database: "MongoDB Atlas",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  healthCheck
};
