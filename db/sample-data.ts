import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: 'Sophie',
      email: 'example@example.com',
      password: hashSync('123456', 10)
    },
    {
      name: 'Tester',
      email: 'test@test.com',
      password: hashSync('123456', 10)
    }
  ]
}

export default sampleData;