export type Ticket = {
  id: string
  title: string
  request: string
  status: 'open' | 'closed'
}

export type TicketPayload = {
  title: string,
  text: string
}
