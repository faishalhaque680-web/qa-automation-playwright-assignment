import { test, expect, request } from '@playwright/test';

test('Create User API', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://reqres.in/api/users', {
    data: {
      name: 'Faishal',
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(201);
});

test('Get User API', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
});

test('Update User API', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Updated Faishal'
    }
  });

  expect(response.status()).toBe(200);
});
