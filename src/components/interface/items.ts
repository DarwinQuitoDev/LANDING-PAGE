export interface Product {
    id: string;
    title: string;
    category: string;
    rating: number;
    price: number; // Considera cambiar a number si lo usas para cálculos
    linkImg: string;
    description: string;
    onfire: boolean;
    enable: boolean;
    taxId: string;
    specifications: ProductSpecifications;
}

export interface ProductSpecifications {
    processor: string;
    ram: string;
    screenSize: string;
    numericKeyboard: boolean;
    operatingSystem: string;
    storage: string;
    graphicsCard: string;
    storageType: string;
    resolution: string;
    type: string;
    connectivity: string[]; // Lista de conectividades
    refreshRate: string;
    batteryLife: string;
    material: string;
    capacities: string;
    smartTV: boolean;
    integratedSpeakers: boolean;
    dimensions: string;
}
