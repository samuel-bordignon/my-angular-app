import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";

Injectable({ providedIn: 'root' })
export class StorageService<T> {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID))

  getItem<T>(key: string, defautValue: T): T {
    if (!this.isBrowser) return defautValue

    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : defautValue
    } catch (error) {
      console.log(`Erro ao ler chave ${key}. Erro: ${error}`)
      return defautValue
    }
  }
  
  setItem<T>(key: string, value: T): void {
    if (!this.isBrowser) return

    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(`Erro ao ler chave ${key}. Erro: ${error}`)
    }
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key)
    }

  }
}
