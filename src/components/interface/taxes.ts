// src/types.ts
export interface Tax {
    id: string;
    code: string;
    name: string;
    rate: string; // Cantidad o porcentaje en números
    isEnable: number; // Usualmente 1 para habilitado, 0 para deshabilitado
    isFixed: string; // Puede ser "sí" o "no", o "true"/"false"
  }
  