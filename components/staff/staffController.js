
const { queryRange } = require('./staffService');
const getOrderList = async (req, res) => {
    try {
        queryRange('XEM_DON_HANG', 1, 100).then((order)=>{
            console.log(order);
            res.render('staff/order-list', { order });
        } );
    } catch(error) {
        res.status(409).json({sucess: false, data: [], error: error});
    }
}

module.exports = {
    getOrderList
}