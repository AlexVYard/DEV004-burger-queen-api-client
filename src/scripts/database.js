export async function database(route, method, accessToken, body) {
  let result = await fetch(`https://burger-queen-api-mock-alexa.glitch.me/${route}`, { 
    method: method,
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + accessToken/* ,
      'Accept': 'application/json' */
    },
    body: JSON.stringify(body)
  })
  // console.log(result)
  // console.log(await result.json())
  result = await result.json()
  // console.log(localStorage.getItem("accessToken"))
  // console.log(result)
  // localStorage.setItem(`Order ${result["id"]}`, JSON.stringify(result))
  // console.log(localStorage.getItem(`Order ${result["id"]}`))
  return result
  // setResultText("Result: " + new Date().toLocaleString())
}
