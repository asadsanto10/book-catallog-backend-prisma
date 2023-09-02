# Book Catallog Backend Assignment

## API:

```http
 https://book-catallog-backend-prisma.vercel.app/
```

## Admin Token (Bearer token):

```token
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZmNiY2EyNC1hYjg4LTQyN2EtYWY0Ny0yZDg1OTM4YjE5ODEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTM1OTI2MTMsImV4cCI6MTcyNTEyODYxM30.fywIBnRuSL4FfZGe-aGPGN6FiayBPJbz1apFlM8s9ys
```

## Customer Token (Bearer token):

```token
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3MWNhNjUyZi03MTg3LTQzNzItYWZjMS1mOTg5OTVhNjQ1ZjkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2OTM1OTM3MzUsImV4cCI6MTcyNTEyOTczNX0.K9lZuKAqO0QwS4bM_ZflCBurmG9eJrngQ4Fv6j0XbvY
```

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/4e7e8f70-8b1c-44c2-a56e-d9e70f58d839 (Single GET)
- api/v1/users/4e7e8f70-8b1c-44c2-a56e-d9e70f58d839 (PATCH)
- api/v1/users/4e7e8f70-8b1c-44c2-a56e-d9e70f58d839 (DELETE)
- api/v1/profile (GET)

#### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
