
let totalBalance = 0

const getBalance = (req,res) => {
    return res.status(200).json({
        data:totalBalance
    })
}

const setBalance = (req,res) => {
    const { balance } = req.body
    totalBalance += balance
    return res.status(200).json({
        status:200,
        message:"Se cargo con exito"
    })
}




module.exports = {
    getBalance,
    setBalance
}