import { Component, EventEmitter, input, Input, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.html",
    styleUrl: "./header.css"
})
export class HeaderComponent {
    @Output() openModal = new EventEmitter()
    onAddUser() {
        this.openModal.emit()
    }
}