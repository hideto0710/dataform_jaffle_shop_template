const scd = require("dataform-scd");

const { view, updates } = scd("raw_orders_scd", {
  uniqueKey: "id",
  timestamp: "updated_at",
  source: {
    schema: dataform.projectConfig.vars.rawSchema,
    name: "orders",
  },
  tags: ["scd"],
});


view.config({schema: dataform.projectConfig.vars.rawSchema});
updates.config({schema: dataform.projectConfig.vars.rawSchema});
