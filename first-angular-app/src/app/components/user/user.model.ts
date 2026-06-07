export type User = {
  id: string
  name: string
  avatar: string
}

export type CreateUser = Omit<User,"id">