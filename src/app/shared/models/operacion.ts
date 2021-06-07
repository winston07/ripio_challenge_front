export interface Operacion {
    cuenta_origen: string;
    cuenta_destino: string;
    numero_operacion: number;
    monto: number;
    fecha: string;
    es_abono: boolean;
};