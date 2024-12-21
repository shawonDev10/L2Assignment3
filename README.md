# FutureStack Blog

**\*Live link -> [click hear to visite](https://l2-assignment3-omega.vercel.app/)**

## Technologies

- _TypeScript_
- _Node.js_
- _Express.js_
- _MongoDB with Mongoose_
- _JWT - for user validation_

## Installation & Setup

#### 1. Clone the Repository:

```bash
git clone <repository-url>
cd <project-folder>
```

#### 2. Install Dependencies:

```bash
npm install
```

#### 3. Environment Variables:

```bash
PORT=your port
DATABASE_URL=your database url
BCRYPT_SALT_ROUND=your bcrypt salt round number
ACCESS_TOKEN_SECRET=your access token secret
ACCESS_TOKEN_EXPIRE=your access token expire [e.g., 1h]
```

#### 4. Run the Application:

```bash
npm run start         // if you use only javascript
npm run start:dev     // if you use typescript
npm run start:prod    // if you use javascript and hvae nodemon
```

## Features

- _User can register, login and get a jwt access token_
- _User can post, update, delete and see all or specific blog using query_
- _Admin can Block and delete a user_
