import { inject, Injectable, signal } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { OrderModel, OrderStatus } from "./order.model";


@Injectable({ providedIn: "root" })
export class OrderService {

  private store = inject(StorageService)
  private readonly KEY = 'techfix_orders'

  private orders = signal<OrderModel[]>(this.store.getItem(this.KEY, []))

  addOrder(newOrder: OrderModel) {
    this.store.setItem(this.KEY, this.orders.update(list => [...list, newOrder]))
    this.save()
  }
  loadOrders() {
    return this.store.getItem(this.KEY, [])
  }
  deleteOrder(id: string) {
    this.orders.update(list => list.filter(o => o.id !== id))
    this.save()
  }
  updateStatus(id: string, status: OrderStatus) {
    this.orders.update(list => list.map(o => o.id === id ? { ...o, status } : o))
    this.save
  }

  private save() {
    this.store.setItem(this.KEY, this.orders())
  }
}

