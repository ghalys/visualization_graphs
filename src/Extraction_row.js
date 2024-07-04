const dataRows;
const items = ['One Call','Two Calls','Three Calls','More Calls']
function getDataCalls(dataRows,items){
  const dataCalls = [];

  //initialization of dataCalls
  items.forEach((item) =>{
    dataCalls.push({item:item, value:0})
  })

  dataRows.forEach((date) => {
    dataCalls[0].value += dataRows.date.nbUniqueUsersWithOneCall;
    dataCalls[1].value += dataRows.date.nbUniqueUsersWithTwoCalls;
    dataCalls[2].value += dataRows.date.nbUniqueUsersWithThreeCalls;
    dataCalls[3].value += dataRows.date.nbUniqueUsersWithMoreFourCalls;
  });

  return dataCalls;
}

// nbUniqueUsersWithOneCall: d.nbUniqueUsersWithOneCall,
// nbUniqueUsersWithTwoCalls: d.nbUniqueUsersWithTwoCalls,
// nbUniqueUsersWithThreeCalls: d.nbUniqueUsersWithThreeCalls,
// nbUniqueUsersWithMoreFourCalls: d.nbUniqueUsersWithMoreFourCalls,
// nbUniqueUsers: