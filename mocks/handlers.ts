import { http, HttpResponse } from 'msw';

export const handlers = [
  // An example handler
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        { id: 1, name: 'test', profession: 'cleaner' },
        { id: 2, name: 'sample', profession: 'teacher' },
        { id: 3, name: 'example', profession: 'developer' },
      ],
      { status: 200 }
    );
  }),
];
