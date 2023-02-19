
module.exports = () => {
  const data = {
    shipments: [],
  }
  for (let i = 0; i < 1000; i++) {
    data.shipments.push({
      id: i,
      title: `shipment${i}`,
    })
  }
  return data
}

// "json-server": "json-server --watch data.json --port 3001 --routes routes.json", //genereerid random data
//use // faker , casual , chancejs 