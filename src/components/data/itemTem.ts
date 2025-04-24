// src/data/products.ts
import product1 from "../../assets/Producto/1.png";
import product2 from "../../assets/Producto/2.png";
import product3 from "../../assets/Producto/3.png";
import product4 from "../../assets/Producto/4.png";
import product5 from "../../assets/Producto/5.png";
import product6 from "../../assets/Producto/6.png";
import product7 from "../../assets/Producto/7.png";
import product8 from "../../assets/Producto/8.png";
import { Product } from '../interface/items';

export const itemsTem: Product[] = [
  {
    id: '1',
    title: 'Apple MacBook Pro 16"',
    category: 'Laptops',
    rating: 5,
    price: 2010.89,
    linkImg: product1,
    description: `
      Sistema Operativo: macOS.
      Procesador: Apple M1 Pro Chip (8 núcleos de CPU, 14 núcleos de GPU).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 16 GB unificada.
      Pantalla: 16" Liquid Retina XDR display.
      Conectividad: Wi-Fi 6; Bluetooth 5.0.
      Puertos: 3 Thunderbolt 4 (USB-C), HDMI, MagSafe 3, ranura para tarjeta SDXC.
      Cámara: 1080p FaceTime HD camera.
      Audio: Sistema de seis altavoces con woofers de cancelación de fuerza.
      Batería: Hasta 21 horas de duración.
      Dimensiones: 35.57 x 24.81 x 1.68 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12345',
    specifications: {
      processor: 'Apple M1 Pro',
      ram: '16 GB',
      screenSize: '16"',
      numericKeyboard: false,
      operatingSystem: 'macOS',
      storage: '512 GB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.0', 'Thunderbolt 4', 'HDMI', 'MagSafe 3', 'SDXC card slot'],
      refreshRate: '',
      batteryLife: 'Hasta 21 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '35.57 x 24.81 x 1.68 cm'
    }
  },
  {
    id: '2',
    title: 'Dell XPS 13"',
    category: 'Laptops',
    rating: 4,
    price: 1199.99,
    linkImg: product2,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: Intel Core i7-1185G7 (hasta 4.8 GHz).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 16 GB LPDDR4x.
      Pantalla: 13.4" FHD+ (1920 x 1200) InfinityEdge.
      Conectividad: Wi-Fi 6; Bluetooth 5.1.
      Puertos: 2 Thunderbolt 4 (USB-C), ranura para tarjeta microSD, conector de auriculares.
      Cámara: HD 720p con micrófonos duales.
      Audio: Altavoces estéreo con Waves MaxxAudio Pro.
      Batería: Hasta 14 horas de duración.
      Dimensiones: 29.6 x 19.9 x 1.48 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12346',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16 GB',
      screenSize: '13.4"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '512 GB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'Thunderbolt 4', 'microSD card slot'],
      refreshRate: '',
      batteryLife: 'Hasta 14 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '29.6 x 19.9 x 1.48 cm'
    }
  },
  {
    id: '3',
    title: 'HP Spectre x360 14"',
    category: 'Laptops',
    rating: 4,
    price: 1399.99,
    linkImg: product3,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: Intel Core i7-1165G7 (hasta 4.7 GHz).
      Almacenamiento: 1 TB SSD.
      Memoria RAM: 16 GB LPDDR4x.
      Pantalla: 14" WUXGA+ (1920 x 1280) multitáctil.
      Conectividad: Wi-Fi 6; Bluetooth 5.0.
      Puertos: 2 Thunderbolt 4 (USB-C), USB-A, conector de auriculares.
      Cámara: HD 720p con obturador físico.
      Audio: Altavoces Bang & Olufsen.
      Batería: Hasta 12 horas de duración.
      Dimensiones: 29.8 x 22.01 x 1.69 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12347',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16 GB',
      screenSize: '14"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '1 TB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.0', 'Thunderbolt 4', 'USB-A'],
      refreshRate: '',
      batteryLife: 'Hasta 12 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '29.8 x 22.01 x 1.69 cm'
    }
  },
  {
    id: '4',
    title: 'Asus ROG Zephyrus G14"',
    category: 'Gaming Laptops',
    rating: 4,
    price: 1499.99,
    linkImg: product4,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: AMD Ryzen 9 5900HS (hasta 4.6 GHz).
      Almacenamiento: 1 TB SSD.
      Memoria RAM: 16 GB DDR4.
      Pantalla: 14" QHD (2560 x 1440) 120Hz.
      Gráficos: NVIDIA GeForce RTX 3060.
      Conectividad: Wi-Fi 6; Bluetooth 5.1.
      Puertos: HDMI 2.0b, USB-C, USB-A, conector de auriculares.
      Cámara: No tiene.
      Audio: Altavoces estéreo con Dolby Atmos.
      Batería: Hasta 10 horas de duración.
      Dimensiones: 32.4 x 22.2 x 1.79 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12348',
    specifications: {
      processor: 'AMD Ryzen 9',
      ram: '16 GB',
      screenSize: '14"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '1 TB',
      graphicsCard: 'NVIDIA GeForce RTX 3060',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'HDMI 2.0b', 'USB-C', 'USB-A'],
      refreshRate: '120Hz',
      batteryLife: 'Hasta 10 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '32.4 x 22.2 x 1.79 cm'
    }
  },
  {
    id: '5',
    title: 'Lenovo ThinkPad X1 Carbon"',
    category: 'Laptops',
    rating: 5,
    price: 1299.99,
    linkImg: product5,
    description: `
      Sistema Operativo: Windows 11 Pro.
      Procesador: Intel Core i7-1165G7 (hasta 4.7 GHz).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 16 GB LPDDR4x.
      Pantalla: 14" FHD+ (1920 x 1200) antirreflejos.
      Conectividad: Wi-Fi 6; Bluetooth 5.1.
      Puertos: 2 Thunderbolt 4, USB-C, USB-A, HDMI 2.0, conector de auriculares.
      Cámara: HD 720p con tapa ThinkShutter.
      Audio: Altavoces estéreo con Dolby Atmos.
      Batería: Hasta 15 horas de duración.
      Dimensiones: 31.5 x 22.1 x 1.59 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12349',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16 GB',
      screenSize: '14"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '512 GB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'Thunderbolt 4', 'USB-C', 'USB-A', 'HDMI 2.0'],
      refreshRate: '',
      batteryLife: 'Hasta 15 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '31.5 x 22.1 x 1.59 cm'
    }
  },
  {
    id: '6',
    title: 'Acer Predator Helios 300"',
    category: 'Gaming Laptops',
    rating: 4,
    price: 1399.99,
    linkImg: product6,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: Intel Core i7-12700H (hasta 4.7 GHz).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 16 GB DDR4.
      Pantalla: 15.6" FHD (1920 x 1080) 144Hz.
      Gráficos: NVIDIA GeForce RTX 3060.
      Conectividad: Wi-Fi 6; Bluetooth 5.2.
      Puertos: HDMI 2.1, USB-C, USB-A, conector de auriculares.
      Cámara: HD 720p.
      Audio: Altavoces estéreo con DTS:X Ultra.
      Batería: Hasta 8 horas de duración.
      Dimensiones: 36.3 x 25.4 x 2.39 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12350',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16 GB',
      screenSize: '15.6"',
      numericKeyboard: true,
      operatingSystem: 'Windows 11',
      storage: '512 GB',
      graphicsCard: 'NVIDIA GeForce RTX 3060',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.2', 'HDMI 2.1', 'USB-C', 'USB-A'],
      refreshRate: '144Hz',
      batteryLife: 'Hasta 8 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '36.3 x 25.4 x 2.39 cm'
    }
  },
  {
    id: '7',
    title: 'Microsoft Surface Laptop 4"',
    category: 'Laptops',
    rating: 4,
    price: 1299.99,
    linkImg: product7,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: Intel Core i5-1145G7 (hasta 4.6 GHz).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 8 GB LPDDR4x.
      Pantalla: 13.5" PixelSense (2256 x 1504).
      Conectividad: Wi-Fi 6; Bluetooth 5.0.
      Puertos: USB-C, USB-A, conector de auriculares.
      Cámara: HD 720p.
      Audio: Altavoces estéreo Dolby Audio.
      Batería: Hasta 11.5 horas de duración.
      Dimensiones: 30.8 x 22.3 x 1.53 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12351',
    specifications: {
      processor: 'Intel Core i5',
      ram: '8 GB',
      screenSize: '13.5"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '512 GB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.0', 'USB-C', 'USB-A'],
      refreshRate: '',
      batteryLife: 'Hasta 11.5 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '30.8 x 22.3 x 1.53 cm'
    }
  },
  {
    id: '8',
    title: 'Samsung Galaxy Book Pro 360"',
    category: 'Laptops',
    rating: 4,
    price: 1399.99,
    linkImg: product8,
    description: `
      Sistema Operativo: Windows 11 Home.
      Procesador: Intel Core i7-1165G7 (hasta 4.7 GHz).
      Almacenamiento: 512 GB SSD.
      Memoria RAM: 16 GB LPDDR4x.
      Pantalla: 15.6" AMOLED (1920 x 1080).
      Conectividad: Wi-Fi 6; Bluetooth 5.1.
      Puertos: 2 USB-C, USB-A, microSD, conector de auriculares.
      Cámara: HD 720p.
      Audio: Altavoces AKG.
      Batería: Hasta 20 horas de duración.
      Dimensiones: 35.4 x 22.9 x 1.87 cm.
    `,
    onfire: false,
    enable: true,
    taxId: 'VAT12352',
    specifications: {
      processor: 'Intel Core i7',
      ram: '16 GB',
      screenSize: '15.6"',
      numericKeyboard: false,
      operatingSystem: 'Windows 11',
      storage: '512 GB',
      graphicsCard: 'Integrada',
      storageType: 'SSD',
      resolution: '',
      type: '',
      connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'USB-C', 'USB-A', 'microSD'],
      refreshRate: '',
      batteryLife: 'Hasta 20 horas',
      material: '',
      capacities: '',
      smartTV: false,
      integratedSpeakers: true,
      dimensions: '35.4 x 22.9 x 1.87 cm'
    }
  }
];
