export interface PointOfSale {
    id: string;
    companyName: string;
    customerId: string;
    orderDate: string; // ISO 8601 format
    totalAmount: number;
    totalIva: number;
    totalWithIva: number;
    discountId: string;
    totalWithTaxAndDiscount: number;
    typeState: string; // Estado de la orden
    detail: PointOfSaleDetail[];
}

export interface PointOfSaleDetail {
    productId: string;
    quantity: number;
    priceUnit: number;
    totalAmount: number;
    totalTax: number;
    totalWithTax: number;
}
