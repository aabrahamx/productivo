import { Todo } from "../features/todo/todoSlice";

export const mockData: Todo[] = [
  {
    id: 1652333017097,
    title: 'Home Work',
    description: 'Finish home work before midnight',
    status: 'todo',
    tags: null,
  },
  {
    id: 1652388390066,
    title: 'laundry',
    description: 'you need to get detergent first',
    status: 'doing',
    tags: 'personal',
  },
  {
    id: 1652389577685,
    title: 'meeting',
    description: '',
    status: 'finished',
    tags: 'work',
  },
  {
    id: 1652389601893,
    title: 'pay bills',
    description: 'make credit card and ',
    status: 'doing',
    tags: 'personal',
  },
];
