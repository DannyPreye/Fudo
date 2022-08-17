export default {
    name: "order",
    title: "order",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            Option: {
                maxLength: 40
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            Option: {
                maxLength: 15
            }
        },
        {
            name: 'address',
            title: 'address',
            type: 'string',
            Option: {
                maxLength: 100
            }
        },
        {
            name: 'method',
            title: 'Method',
            type: 'number',


        },
        {
            name: "total",
            title: 'Total',
            type: "number"

        },
        {
            name: "status",
            title: 'Status',
            type: "number"

        }
    ]
}