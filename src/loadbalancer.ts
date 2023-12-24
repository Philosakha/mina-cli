// create a load balancer for the API endpoints
// it takes in an array of endpoints and returns a function that returns the next endpoint in the array

async function loadBalancer(endpoints: string[]) {
  let i = 0;

  return function () {
    const endpoint = endpoints[i];

    i = (i + 1) % endpoints.length;

    return endpoint;
  };
}
