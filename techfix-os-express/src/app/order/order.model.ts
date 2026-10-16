export type OrderStatus = 'Recebido' | 'Em Reparo' | 'Pronto' | 'Entregue';
export type OrderPriority = 'Baixa' | 'Média' | 'Alta';

export interface OrderModel {
  id: string;
  clientName: string;
  device: string;
  issueDescription: string;
  price: number;
  priority: OrderPriority;
  status: OrderStatus;
  createdAt: string;
}

export type CreateOrderPayload = Omit<OrderModel, 'id' | 'status' | 'createdAt'>;
