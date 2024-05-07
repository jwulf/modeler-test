const c8sdk = require('@camunda8/sdk')

const c8 = new c8sdk.Camunda8()

const modeler = c8.getModelerApiClient()

modeler.getInfo().then(info => {
    console.log(info)
})