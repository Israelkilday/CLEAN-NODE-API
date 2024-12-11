module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "jest",
    },
    binary: {
      version: "^6.12.0",
      skipMD5: true,
    },
    autoStart: false,
  },
};
