const bulidType = process.argv.slice(2);
const bulidTypeKrAct = bulidType[0].includes('production');
const configFileKrAct = '.env.production';

let configPath = configFileKrAct;

const PropertiesReader = require("properties-reader", {
  writer: { saveSections: true },
});

if (configPath !== "") {
  const config = PropertiesReader(configPath);
  const count = config.get("VUE_APP_VERSION_CODE") + 1;
  console.log(count);

  var m = new Date();
  var dateString =
    m.getFullYear() +
    "/" +
    ("0" + (m.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + m.getDate()).slice(-2) +
    "-" +
    ("0" + m.getHours()).slice(-2) +
    ":" +
    ("0" + m.getMinutes()).slice(-2) +
    ":" +
    ("0" + m.getSeconds()).slice(-2);

  config.set("VUE_APP_RELEASE_DATE", dateString);
  config.set("VUE_APP_VERSION_CODE", count);

  config.save(configPath);
}
