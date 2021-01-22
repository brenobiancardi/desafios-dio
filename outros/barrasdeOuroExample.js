const inputs = [
  //para uso local
  "6 10 ",
  "0 10 10 10 10 10",
  "1 4 7",
  "5 1 2",
  "3 5 3",
  "2 5 2",
  "6 5 2",
  "3 10",
  "10 10 12",
  "1 2 5",
  "2 3 7",
  "5 9 ",
  "5 2 6 3 6",
  "1 2 1",
  "2 3 1",
  "2 4 1",
  "2 5 1",
  "",
]; //para uso local

const main = (inputs) => {
  //encapsulado para teste local, remover na DIO
  // (() => { //para uso na DIO, descomentar

  let i = 0; //para uso local

  let input = "";
  let taxToPay;
  let routes, visited, previousRoutes;

  // input = gets(); //para uso na DIO
  input = inputs[i++]; //para uso local

  if (!input || input === "") return false;

  const [nCities, cargo] = input.match(/\d+/g);

  //if (1 * nCities < 2 || 1 * nCities > Math.pow(10, 4) || 1 * cargo < 1 || 1 * cargo > 100) return false; //Essa validação não é aceita na DIO, apesar do enunciado...removê-la para uso na DIO

  // taxToPay = gets().match(/\d+/g); //para uso na DIO
  taxToPay = inputs[i++].match(/\d+/g); //para uso local

  if (taxToPay.length > nCities || taxToPay.length < 1) return false;
  taxToPay = taxToPay.map((v) => parseInt(v));

  if (taxToPay.some((v) => v < 0 || v > 100)) return false;
  taxToPay.unshift(0);

  visited = Array.from(new Array(1 * nCities + 1), (v) => false);

  previousRoutes = Array.from(new Array(1 * nCities + 1), (v) => 0);

  routes = Array.from(new Array(1 * nCities + 1), (v) => []);

  for (let index = 1; index < nCities; index++) {
    // let [from, to, distance] = gets().match(/\d+/g); //para uso na DIO
    let [from, to, distance] = inputs[i++].match(/\d+/g); //para uso local

    // if ([from, to].some((v => (1 * v < 1 || 1 * v > nCities))) return false; //bug na DIO, necessário remover esta validação

    if (distance < 1 || distance > 100) return false;

    routes[from].push({ to: to * 1, distance: distance * 1 });
    routes[to].push({ to: from * 1, distance: distance * 1 });
  }

  let fiefdom = 1;
  let stack = [];
  let nodes = [];

  stack = [...stack, fiefdom];

  visited[fiefdom] = true;

  previousRoutes[fiefdom] = -1;

  while (stack.length > 0) {
    let v = stack.pop();

    for (const route of routes[v]) {
      if (visited[route.to]) continue;

      visited[v] = true;

      previousRoutes[route.to] = v;

      stack = [...stack, route.to];
    }

    if (v !== 1) {
      nodes = [...nodes, v];
    }
  }

  let totalDistance = Number(0);

  while (nodes.length > 0) {
    let d = -1;
    let v = nodes.pop();

    for (let index = 0; index < routes[previousRoutes[v]].length; ++index) {
      const route = routes[previousRoutes[v]][index];

      if (route.to === v) {
        d = route.distance;
        break;
      }
    }
    let mover = Number(0);

    mover =
      Math.ceil(parseFloat(Number(taxToPay[v]) / Number(cargo))) *
      (2 * Number(d));

    totalDistance += mover;
    taxToPay[previousRoutes[v]] += taxToPay[v];
  }
  console.log(totalDistance.toString());
  // })(); //fim da IIFE para uso na DIO

  return String(totalDistance); // para uso local (test)
}; // encapsulado para teste local, remover para uso na DIO

main(inputs); //comentar antes de executar teste local e remover na DIO

module.exports = main; //somente para uso local (test)
