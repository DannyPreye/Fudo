import create from "zustand"



export const useStore = create(
    (set) => ({

        // cart
        cart: {
            pizzas: []
        },


        // add pizza in cart 
        addPizza: (data) => set((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }
        })),

        // Remove pizza
        removePizza: (index) =>
            set((state) => ({
                pizzas: state.cart.pizzas.filter((item, i) => i != index)
            }))
    })
)