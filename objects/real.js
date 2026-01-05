let orders = [
    {
        id:1,
        items:[
            {title: "laptop", price:50000},
            {title: "mouse", price:5000},
        ],
        address: {
            city:"indore",
            pincode:1234
        }
    },

    {
        id:2,
        items:[
            {title: "computer", price:500900},
            {title: "CPU", price:25000},
        ],
        address: {
            city:"bhopal",
            pincode:23456
        }
    }
]

console.log(orders[0].items[0].price)