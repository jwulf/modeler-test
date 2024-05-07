const camundaSdk = require('@camunda8/sdk');
const camunda = new camundaSdk.Camunda8();
const zeebe = camunda.getZeebeGrpcApiClient();
run();
async function run() {
  let topology = await zeebe.topology();
  console.log(topology);
}