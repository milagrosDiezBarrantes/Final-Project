// curl -X POST \
//     'https://api.mercadopago.com/preapproval' \
//     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//     -H 'Content-Type: application/json' \
//     -d '{
//   "preapproval_plan_id": "2c938084726fca480172750000000000",
//   "reason": "Yoga classes",
//   "external_reference": "YG-1234",
//   "payer_email": "test_user@testuser.com",
//   "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a",
//   "auto_recurring": {
//     "frequency": 1,
//     "frequency_type": "months",
//     "start_date": "2020-06-02T13:07:14.260Z",
//     "end_date": "2022-07-20T15:59:52.581Z",
//     "transaction_amount": 10,
//     "currency_id": "ARS"
//   },
//   "back_url": "https://www.mercadopago.com.ar",
//   "status": "authorized"
// }'

// curl -X POST \
//     'https://api.mercadopago.com/preapproval_plan' \
//     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//     -H 'Content-Type: application/json' \
//     -d '{
//   "reason": "Yoga classes",
//   "auto_recurring": {
//     "frequency": 1,
//     "frequency_type": "months",
//     "repetitions": 12,
//     "billing_day": 10,
//     "billing_day_proportional": true,
//     "free_trial": {
//       "frequency": 1,
//       "frequency_type": "months"
//     },
//     "transaction_amount": 10,
//     "currency_id": "ARS"
//   },
//   "payment_methods_allowed": {
//     "payment_types": [
//       {}
//     ],
//     "payment_methods": [
//       {}
//     ]
//   },
//   "back_url": "https://www.yoursite.com"
// }'


// const mercadopago = require ("mercadopago")

// mercadopago.configure({
//     access_token : "TEST-8232687946012298-050323-7c35a85514cf9245d1104a8f4a4c1a4a-57981256"
// });
// class MercadopagoController{
//     async mercadopago({request}){
//         let preference ={
//             items:[
//                 {
//                     title: "Be Premium",
//                     unit_price: 600,
//                     quantity:1
//                 }
//             ]
//         };
//         const res = await mercadopago.preferences.create(preference)

//         return res
//     }
// }

// module.exports = MercadopagoController