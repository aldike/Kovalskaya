const User = require('./User');

const changeBalance = async (req, res) => {
    try{
        const user = await User.findByPk(req.body.userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if(req.body.amountAdd && !req.body.amountSub){
            let amountResult = Number(user.balance) + Number(req.body.amountAdd)
            await User.update(
                {balance: amountResult},
                {where: {
                    id: req.body.userId
                }}
            );
            res.status(200).end();
        }else if(!req.body.amountAdd && req.body.amountSub){
            let amountResult = Number(user.balance) - Number(req.body.amountSub)
            if(amountResult < 0){
                res.status(400).send('Balance cannot be less than 0')
            }else{
                await User.update(
                    {balance: amountResult},
                    {where: {
                        id: req.body.userId
                    }}
                );
                res.status(200).end();
            }
        }else if(req.body.amountAdd && req.body.amountSub){
            res.status(400).send('Choose adding or subtracting amount not both')
        }else{
            res.status(400).send('Write down any amount')
        }
        
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Failed to change balance'});
    }
}

module.exports = {changeBalance}