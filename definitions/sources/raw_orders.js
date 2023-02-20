const scd = require("dataform-scd");

scd("raw_orders_scd", {
  uniqueKey: "id",
  timestamp: "updated_at",
  source: {
    schema: dataform.projectConfig.vars.rawSchema,
    name: "orders",
  },
  tags: ["scd"],
});
