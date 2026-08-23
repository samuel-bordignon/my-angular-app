import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-status-server',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-status-server.component.html',
  styleUrl: './dashboard-status-server.component.css'
})
export class DashboardStatusServerComponent implements OnInit {
  currentStatus = signal<'offline' | 'online' | 'unknown'>('online')
  private destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {//<-- ativa a cada alteração no valor 
      console.log(this.currentStatus())
    })
  }

  ngOnInit(): void {
    console.log('ON INIT')
    const interval = setInterval(() => {
      const rnd = Math.random()
      if (rnd > 0.5) {
        this.currentStatus.set("online")
      } else if (rnd > 0.9) {
        this.currentStatus.set("offline")
      } else {
        this.currentStatus.set("unknown")
      }
    }, 5000)
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
}
