

const fetchGetBalance = async () => {
    try {
        const response = await fetch("http://localhost:7878/api/balance")
        const apiData = await response.json()
        return apiData
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchGetBalance
}