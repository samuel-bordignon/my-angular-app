import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../../../data/dummy-users";
import { CreateUser, User } from "./user.model";

@Injectable({ providedIn: "root" })
export class UserService {
    private users: User[] = this.getUsers()

    getUsers(): User[] {
        const stored = localStorage.getItem('users')
        return stored ? JSON.parse(stored) : DUMMY_USERS
    }


    selectUser(userId: string) {
        return this.users.find(user => user.id === userId)
    }

    addNewUser(data: CreateUser) {
        this.users.push({
            ...data,
            id: "u" + this.users.length,
        })
        this.saveTask()
    }

    deleteUser(userId: string) {
        this.users = this.users.filter(user => user.id !== userId)
        this.saveTask()
    }

    saveTask() {
        localStorage.setItem("users", JSON.stringify(this.users))
    }
}