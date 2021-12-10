const purchase = [
    {id:`1`, name: "t-shirt",price:1999},
    {id:`2`, name:`shoes`,price:4999},

]

const total_amount = 10999;
const shipping_fee = 1099;

var stripe = Stripe(
    "pk_test_51K4A12KSJac9IiBWLLPq0g6QCNKsq4ZNaiAF9ywRS3GJpyvDkoFoNTzTj1ZZ9oAo85yp8BzJTZZdtTtm4dm9HTWs00nIggh0DR"
);

document.querySelector("button").disabled = true;
fetch(`/stripe`,{
    method:"POST",
    headers: {
        'Content-Type':"application/json",
    },
    body: JSON.stringify({purchase,total_amount, shipping_fee})
})
    .then(function(results){
        return results.json()
    })
    .then(function (data){
        var elements = stripe.elements()

        var style={
            base:{
                color:"#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmothing:"antialised",
                fontSize:"16px",
                "::placeholder":{
                    color: "#32325d"
                }
            },
            invaild:{
                fontFamily:"Arial,san-serif",
                color:"#fa755a",
                iconColor:"#fa755a",
            }
        };

        var card = elements.create("card",{ style: style });

        card.mount(`#card-element`)

        card.on("change",function(event){
            document.querySelector(`button`).disabled = event.empty;
            document.querySelector(`#card-error`).textContent = event.error
            ?event.error.message
            :""
        })

        var form = document.getElementById(`payment-form`)
        form.addEventListener(`submit`, (e) => {
            e.preventDefault()
            payWithCard(stripe, card, data.clientSecret)
        })
    })

    //Calls stripe.confirmCardPayment
    // If the card re   uires aithentication Stripe sjows a popup medal tp
    //propmt the user to enter authenictuob details with leaving the page 

    const payWithCard = function (stripe,card,clientSecret){
        loading(true);
        stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card
            }
        })
        .then(function (results){
            if(results.error){
                showError(results.error.message)
            }else{
                orderComplete(results.paymentIntent.id)
            }
        })
    }

    const orderComplete = function (paymentIntentId){
        loading(false)
        document
        .querySelector(`results-message a`)
        .setAttribute("href", "https://dashboard.stripe.com/test/payments" = paymentIntentId
        );
        document.querySelector(".result-message").classList.remove(`hidden`)
        document.querySelector('button').disabled = true
    }

    const showError = function (errorMsgText){
        loading(false);
        const errorMsg = document.querySelector(`#card-error`)
        error.Msg.textContent = errorMsgText
        setTimeout(()=>{
            errorMsg.textContent = ``

        },4000)
    }

    const loading = function (isLoading){
        if(isLoading){
            document.querySelector("button").disabled = true;
            document.querySelector("#spinner").classList.remove("hidden");
            document.querySelector("#button-text").classList.add("hidden");
        }else{
            document.querySelector("button").disabled = false;
            document.querySelector("#spinner").classList.add("hidden");
            document.querySelector("#button-text").classList.remove("hidden");
        }
    }