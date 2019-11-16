const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/getRate', (req, res) => {
    let type = req.query.type
    let weight = Number(req.query.weight)
    let cost = calculateRate(type, weight)

    res.render('pages/getRate', {
      type: type,
      weight: weight,
      cost: cost.toFixed(2)
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


function calculateRate(type, weight) {
  
  if (type === "Letters (Stamped)") {
    switch (true) {
      case weight <= 1:
        return 0.55;
        break;
      case weight <= 2:
        return 0.70;
        break;
      case weight <= 3:
        return 0.85;
        break;
      case weight <= 3.5:
        return 1.00;
        break;
    
      default:
        break;
    }
  }
  else if (type === "Letters (Metered)") {
    switch (true) {
      case weight <= 1:
        return 0.50;
        break;
      case weight <= 2:
        return 0.65;
        break;
      case weight <= 3:
        return 0.80;
        break;
      case weight <= 3.5:
        return 0.95;
        break;
    
      default:
        break;
    }
  }
  else if (type === "Large Envelopes (Flats)") {
    switch (true) {
      case weight <= 1:
        return 1.00;
        break;
      case weight <= 2:
        return 1.15;
        break;
      case weight <= 3:
        return 1.30;
        break;
      case weight <= 4:
        return 1.45;
        break;
      case weight <= 5:
        return 1.60;
        break;
      case weight <= 6:
        return 1.75;
        break;
      case weight <= 7:
        return 1.90;
        break;
      case weight <= 8:
        return 2.05;
        break;
      case weight <= 9:
        return 2.20;
        break;
      case weight <= 10:
        return 2.35;
        break;
      case weight <= 11:
        return 2.50;
        break;
      case weight <= 12:
        return 2.65;
        break;
      case weight <= 13:
        return 2.80;
        break;
    
      default:
        break;
    }
  }
  else if (type === "First-Class Package Service - Retail") {
    switch (true) {
      case weight <= 4:
        return 3.66;
        break;
      case weight <= 8:
        return 4.39;
        break;
      case weight <= 12:
        return 5.19;
        break;
      case weight <= 13:
        return 5.71;
        break;
    
      default:
        break;
    }
  }
  
  return
}