const { queryRange, countAll, queryHistory } = require('./staffService');

const getOrderList = async (req, res) => {
    try {
        await countAll('DONHANG').then((count) => {
            const perPage = 300;
            const maxPage = Math.ceil(count[0]['count'] / perPage);
            const page = ((t = (req.query.page || 1)) <= maxPage) && (t > 0) ? t : 1;

            const from = (perPage * page) - perPage + 1;
            const to = perPage * page;

            queryRange('XEM_DON_HANG', from, to > count[0]['count'] ? count[0]['count'] : to).then((orders) => {
                res.render('staff/order-list', { 
                    orders,
                    current: page,
                    is_overload: page >= maxPage,
                    is_notOne: maxPage > 1,
                    pages: maxPage,
                    next: parseInt(page) + 1,
                    prev: (c = parseInt(page) - 1) ? c : 0
                 })
            });
        });
    } catch(error) {
        res.status(409).json({sucess: false, data: [], error: error});
    }
}

const getSalaryHistory = async (req, res) => {
    try {
        await queryHistory(req).then((history) => {
            console.log(history)
            res.render('staff/salary-history', { history });
        });
    } catch(error) {
        res.status(409).json({sucess: false, data: [], error: error});
    }
}

module.exports = {
    getOrderList,
    getSalaryHistory
}