const csv = require('csv-parser');
const fs = require('fs'); // file system
const { SesionCliente } = require('./database');

const results = [];

fs.createReadStream('e.csv')
  .pipe(csv())
  .on('data', (data) => {

    const day = parseInt(data.day_tz);
    const dayString = day > 9 ? `${day}` : `0${day}`;
    const hour = parseInt(data.hour_tz)
    const hourString = hour > 9 ? `${hour}` : `0${hour}`;

    const sessionObject = {
      device_mac: data.device_mac,
      branch_office: parseInt(data.branch_office),
      month_tz: parseInt(data.month_tz),
      day_tz: day,
      day_of_week_tz: data.day_of_week_tz,
      hour_tz: hour,
      conection_date: new Date(`2016-${data.month_tz}-${dayString}T${hourString}:00:00Z`),
      visitor: data.visitor === 'true',
      tiempodeses: parseInt(data.tiempodeses),
    };
    results.push(sessionObject);
  })
  .on('end', async () => {
    for (let i = 0; i < results.length; i++) {
      await SesionCliente.create(results[i])
    }
  });
