function monitorCount (rows = 1 , columns = 1) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
