import dbConnect from '../../../ultils/dbConnect'
import StockController from '../../../controllers/stock'

export default async (req, res) => {
    try {
        let Stock = new StockController()
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        await dbConnect()
        switch (req.method) {
            case 'GET':
                switch (typeof req.query.stock) {
                    case 'undefined':
                        res.send('required stock')
                        break
                    case 'string':
                        let stockName = req.query.stock.toUpperCase()
                        let stockObj = await Stock.getStockFromServer(stockName)
                        let price = stockObj.latestPrice
                        let stock = await Stock.findStockFromDB(stockName)
                        if (stock == null) {
                            let newStock = await Stock.createStockToDB(stockName)
                            res.json({
                                'stockData': {
                                    'stock': stockName,
                                    'price': price,
                                    'likes': newStock.like_count
                                }
                            })
                        } else if (req.query.like && stock.ip.indexOf(ip) == -1) {
                            let stockUpdated = await Stock.updateStockToDB(stockName, ip)
                            res.json({
                                'stockData': {
                                    'stock': stockName,
                                    'price': price,
                                    'likes': stockUpdated.like_count
                                }
                            })
                        } else {
                            res.json({
                                'stockData': {
                                    'stock': stockName,
                                    'price': price,
                                    'likes': stock.like_count
                                }
                            })
                        }
                        break
                    case 'object':
                        let stockName1 = req.query.stock[0].toUpperCase()
                        let stockName2 = req.query.stock[1].toUpperCase()
                        let stockObj1 = await Stock.getStockFromServer(stockName1)
                        let stockObj2 = await Stock.getStockFromServer(stockName2)
                        let price1 = stockObj1.latestPrice
                        let price2 = stockObj2.latestPrice
                        let stock1 = await Stock.findStockFromDB(stockName1)
                        let stock2 = await Stock.findStockFromDB(stockName2)
                        if (stock1 == null && stock2 == null) {
                            let newStock1 = await Stock.createStockToDB(stockName1)
                            let newStock2 = await Stock.createStockToDB(stockName2)
                            res.json({
                                'stockData': [
                                    {
                                        'stock': stockName1,
                                        'price': price1,
                                        'rel_likes': newStock1.like_count - newStock2.like_count
                                    },
                                    {
                                        'stock': stockName2,
                                        'price': price2,
                                        'rel_likes': newStock2.like_count - newStock1.like_count
                                    }
                                ]
                            })
                        } else if (stock1 == null) {
                            let newStock1 = await Stock.createStockToDB(stockName1)
                            if (req.query.like && stock2.ip.indexOf(ip) == -1) {
                                let stock2Updated = await Stock.updateStockToDB(stockName2)
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': newStock1.like_count - stock2Updated.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2Updated.like_count - newStock1.like_count
                                        }
                                    ]
                                })
                            } else {
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': newStock1.like_count - stock2.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2.like_count - newStock1.like_count
                                        }
                                    ]
                                })
                            }
                        } else if (stock2 == null) {
                            let newStock2 = await Stock.createStockToDB(stockName2)
                            if (req.query.like && stock1.ip.indexOf(ip) == -1) {
                                let stock1Updated = await Stock.updateStockToDB(stockName1)
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1Updated.like_count - newStock2.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': newStock2.like_count - stock1Updated.like_count
                                        }
                                    ]
                                })
                            } else {
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1.like_count - newStock2.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': newStock2.like_count - stock1.like_count
                                        }
                                    ]
                                })
                            }
                        } else {
                            if (req.query.like && stock1.ip.indexOf(ip) == -1 && stock2.ip.indexOf(ip) == -1) {
                                let stock1Updated = await Stock.updateStockToDB(stockName1)
                                let stock2Updated = await Stock.updateStockToDB(stockName2)
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1Updated.like_count - stock2Updated.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2Updated.like_count - stock1Updated.like_count
                                        }
                                    ]
                                })
                            } else if (req.query.like && stock1.ip.indexOf(ip) == -1) {
                                let stock1Updated = await Stock.updateStockToDB(stockName1)
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1Updated.like_count - stock2.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2.like_count - stock1Updated.like_count
                                        }
                                    ]
                                })
                            } else if (req.query.like && stock2.ip.indexOf(ip) == -1) {
                                let stock2Updated = await Stock.updateStockToDB(stockName2)
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1.like_count - stock2Updated.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2Updated.like_count - stock1.like_count
                                        }
                                    ]
                                })
                            } else {
                                res.json({
                                    'stockData': [
                                        {
                                            'stock': stockName1,
                                            'price': price1,
                                            'rel_likes': stock1.like_count - stock2.like_count
                                        },
                                        {
                                            'stock': stockName2,
                                            'price': price2,
                                            'rel_likes': stock2.like_count - stock1.like_count
                                        }
                                    ]
                                })
                            }
                        }
                        break
                    default:
                        break
                }
                break;
            default:
                res.status(404).end()
                break
        }
    } catch (e) {
        res.send('DB error')
    }
}