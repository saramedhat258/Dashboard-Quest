# 👤 Responsive Users Dashboard Quest 
🔗 [Live Demo](https://saramedhat258.github.io/Dashboard-Quest/)

# Setup instructions

### 1. Clone the Repository
```bash
git clone https://github.com/saramedhat258/Dashboard-Quest.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

# ✨ Features

1. Mock Authentication (login, logout), and protected routes.
2. CRUD operations on users (Add, Update, Delete)
3. Search users by name or email.
4. Pagination: 5 users per page.
5. Error and success notifications.
6. Form validation.
7. Simple UI using Tailwind CSS and Flowbite React used for UI components to save time.

# API endpoints used

### 1. Fetch all users with pagination
```bash
GET https://dummyjson.com/users?limit={limit}&skip={skip}
```

### 2. Search users
```bash
GET https://dummyjson.com/users/search?q={searchTerm}&limit={limit}&skip={skip}
```

### 3. Add user
```bash
POST https://dummyjson.com/users/add
```

### 4. Update user
```bash
PUT https://dummyjson.com/users/{id}
```

### 5. Delete user
```bash
DELETE https://dummyjson.com/users/{id}
```

# Important Notes:
1. DummyJSON simulates add/update/delete. Changes are not persisted on the server, so i also use local state in React to show ui changes.
2. Search and pagination only work with data comes from API.
3. i use Flowbite React components to speed up UI development and maintain a clean design.



