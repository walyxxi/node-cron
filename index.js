const CronJob = require("cron").CronJob;

const moment = require("moment");

const listWaktu = [
  "2020-05-29T07:51:00.014Z",
  "2020-05-29T07:51:20.014Z",
  "2020-05-29T07:51:40.014Z",
];

listWaktu.map((item) => {
  const s = parseInt(moment(item).format("ss"));
  const m = parseInt(moment(item).format("mm"));
  const h = parseInt(moment(item).format("HH"));
  const D = parseInt(moment(item).format("DD"));
  const M = parseInt(moment(item).format("MM")) - 1;

  console.log(`${s} ${m} ${h} ${D} ${M}`);

  new CronJob(
    `${s} ${m} ${h} ${D} ${M} *`,
    () => {
      console.log(new Date());
    },
    null,
    true,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ).start();
});

// console.log(moment(Date.now()).format("YYYY-MM-DD HH-mm-ss"));
