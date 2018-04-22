// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  });
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (hometown = driver.hometown === location){
      console.log(driver.name)
    }

  })
}


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

// do not know what the slice() is doing before the sort regarding non-DESTRUCTIVE



const driversByName = function(drivers){
   return  drivers.slice().sort(function(a, b){
         return a.name.localeCompare(b.name);
    })
}


const totalRevenue = function(drivers){
  let totalPrice = 0;

  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  })
    return totalPrice
}


  const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length; //here we can use the total revenue function pass in drivers 
};
