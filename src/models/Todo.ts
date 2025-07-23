import { Priority } from "@/enums/TodoPriority"
import { TodoStatus } from "@/enums/TodoStatus"

export interface ITodo {
  id: string
  title: string
  completed: boolean
  status: string
  priority: Priority
}