export const users = [
    ...[...Array(100).keys()].map(count =>({
        id: count,
        name: `John${count}`,
        lastName: `Doe${count}`,
        age: 30,
        email: "john@example.com"
    }))
]
// export const users = jest.mock('./constant', () => ({
//     users: Array.from({ length: 100 }, (_, count) => ({
//       id: count,
//       name: `John${count}`,
//       lastName: `Doe${count}`,
//       age: 30,
//       email: "john@example.com"
//     }))
//   }));