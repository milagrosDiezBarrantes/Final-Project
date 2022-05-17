const request = require("request");

const CLIENT =
	"AaloytJDsRLJrhZ2-ju2aD0PJsfZ2cf2f8Zh3OKjS1jTBBf6QiVCaHev9usoNNMHsdYBKeE0rpLNer1O";
const SECRET =
	"EE0Jnrk_G1qbG1I2m-6hH_bjhQtIwbupo_G-onXMbAFOXYcI8H8vVdcr4UnWj3ct-jxzKolnMTwFaHW3";
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // live: "https://api-m.paypal.com"  para deploy
const auth = { user: CLIENT, pass: SECRET };
const main = require("../controllers/mailer");

const createPayment = (req, res) => {

    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: '115'
            }
        }],
        application_context: {
            brand_name: `MiTienda.com`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3000/execute-payment`, // Url despues de realizar el pago
            cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
        }
    }
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]

    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}

const executePayment = (req, res) => {
    const token = req.query.token; //<-----------

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}


const createProduct = function (req, res) {
	const product = {
		name: "Subscription Marvel",
		description: "Acces to comics",
		type: "SERVICE",
		category: "ANIMATION",
		img_url:
			"https://w7.pngwing.com/pngs/979/782/png-transparent-spider-man-carol-danvers-marvel-comics-superhero-comic-comics-avengers-heroes.png",
	};
	request.post(
		`${PAYPAL_API}/v1/catalogs/products`,
		{
			auth,
			body: product,
			json: true,
		},
		(err, response) => {
			res.json({ data: response.body });
		}
	);
};

const createPlan =function (req, res) {
	const { body } = req;

	const plan = {
		name: "Premium",
		product_id: body.product_id,
		status: "ACTIVE",
		billing_cycles: [
			{
				frequency: {
					interval_unit: "MONTH",
					interval_count: 1,
				},
				tenure_type: "REGULAR",
				sequence: 1,
				total_cycles: 12,
				pricing_scheme: {
					fixed_price: {
						value: "4",
						currency_code: "USD",
					}
				},
			},
		],
		payment_preferences: {
			auto_bill_outstanding: true,
			setup_fee: {
				value: "5",
				currency_code: "USD",
			},
			setup_fee_failure_action: "CONTINUE",
			payment_failure_threshold: 3,
		},
		taxes: {
			percentage: "10",
			inclusive: false,
		},
	};

	request.post(
		`${PAYPAL_API}/v1/billing/plans`,
		{
			auth,
			body: plan,
			json: true,
		},
		(err, response) => {
			res.json({ data: response.body });
		}
	);
}

const generateSubscription = (req, res) => {
    const { body } = req
	let date = new Date();
let nexDay= date.getTime()+(30*60*1000)
nexDay= new Date(nexDay)

    const subscription = {
        plan_id: body.plan_id, //P-3HK92642FR4448515MBQHCYQ
        start_time: nexDay,
        quantity: 1,
        subscriber: {
            name: {
                given_name: "Leifer",
                surname: "Mendez"
            },
            email_address: "customer@example.com",
        },
        return_url: 'http://localhost:3000/paypal/success',
        cancel_url: 'http://localhost:3000/homeCharacters'

    }
    request.post(`${PAYPAL_API}/v1/billing/subscriptions`, {
        auth,
        body: subscription,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}
const success = async (req, res) => {
	//EMAIL AL USUARIO SUCCESS PAGO EXITOSO...  email_address: "customer@example.com",
	await main(email_address)
        res.json("gracias vuelva pronto")
    
}


module.exports = { createProduct, createPlan,generateSubscription,createPayment,
	executePayment ,success};
