const { Router, response } = require("express");

const router = Router();

router.post("/", async (req, res) => {

    var mercadopago = require('mercadopago');
    mercadopago.configurations.setAccessToken("TEST-8232687946012298-050323-7c35a85514cf9245d1104a8f4a4c1a4a-57981256");
    
    var payment_data = {
        payer_email: 'test_user_3931694@testuser.com',
        back_url: 'http://localhost:3000/mercado/feedback',
        reason: 'Monthly subscription to premium package',
        external_reference: 'OP-1234',
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: 600,
          currency_id: 'ARS',
          start_date: mercadopago.utils.date.now().add(1).toString(),
          end_date: mercadopago.utils.date.now().add(3).toString()
        }
      };
    
  const response =  await mercadopago.payment.create(payment_data)
    concole.log(response)
const preferenceId = response.body.id

res.send({preferenceId})

})


router.get("/feedback", async (req, res) => {

response.json({
    Payment:req.query.payment_id,
    Status:req.query.status,
    MerchantOrder:req.query.merchant_order_id
})

})


module.exports = router;
