const path = require("node:path");

module.exports.set = {
  env({ inventory }) {
    return {
      NODE_OPTIONS: `--require ${path.join(
        inventory.inv._project.cwd,
        "tracing.js"
      )}`,
      OTEL_SERVICE_NAME: "RemixArchitectInstrumentation",
    };
  },
};
