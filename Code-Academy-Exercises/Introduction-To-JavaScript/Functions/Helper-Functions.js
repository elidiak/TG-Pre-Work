function monitorCount(rows = 1, columns = 1) {
  return rows * columns;
}

function costOfMonitors(rows = 1, columns = 1) {
  return monitorCount(rows,columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);
