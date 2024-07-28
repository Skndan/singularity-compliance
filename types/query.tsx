export interface Query {
  answer_text: string
  create_time: number
  is_complete: boolean
  query_id: string
  query_text: string
  sources: string[]
  ttl: number
  user_id: string
}
