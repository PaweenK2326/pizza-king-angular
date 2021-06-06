import { Pizza } from '../data/schema/pizza'

export interface CartItem{
    pizza: Pizza,
    custom: object,
    topping: object,
    quantity: number,
    total: number
}