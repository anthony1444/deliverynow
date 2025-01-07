export interface Order {
    id: number;
    orderDate: Date;
    shippedDate?: Date;
    totalAmount: number;
    status: number;
    shippingAddress?: string;
    createdAt: Date;
    updatedAt: Date;
    delivererId?: number;
    customerName:string
    idNeiborhood:number
    iduser:number
}