// const {createApolloFetch} = require("apollo-fetch");
// const { visitFunctionBody } = require("typescript");

// const fetch = createApolloFetch({
//     uri:'http://localhost:4000/graphql'
// });

// let button = document.getElementById("getButton");
// let body = document.body;



// button.addEventListener('click', () => {
//     fetch({
//         query: `query FindAllStations {
//             station_id
//             line_name
//             station_name
//             ward
//         }`
//     })
//     .then(res => res.json())
//     .then (res => console.log(res.data))
// })

// const query = `{
//     findAllStations(id:"f4149f30-8d9b-4ef4-bedb-6a06d6fded9f"){
//       station_id,
//       line_name,
//       station_name,
//       ward
//     }
//   }
//   `;
//   let results = await (await fetch('http://localhost:4000/graphql', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ query }),
//   })).json();

//   body.append(results)