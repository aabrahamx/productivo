import { Todo } from "../features/todo/todoSlice";

export const todoMockData: Todo[] = [
  {
    id: 1652333017097,
    title: 'Home Work',
    description: 'Finish home work before midnight',
    status: 'todo',
    tags: '',
  },
  {
    id: 1652388390066,
    title: 'Laundry',
    description: 'Get detergent first',
    status: 'doing',
    tags: 'personal',
  },
  {
    id: 1652389577685,
    title: 'Meeting',
    description: '',
    status: 'finished',
    tags: 'work',
  },
  {
    id: 1652389601893,
    title: 'Pay bills',
    description: 'Make credit card and utility payments',
    status: 'doing',
    tags: 'personal',
  },
];


export function fetchData() {
  return setTimeout(() => {
    return todoMockData
  }, 2000)
}