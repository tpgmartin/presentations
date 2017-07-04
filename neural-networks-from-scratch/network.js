const nj = require('numjs')

// The activation function of choice, for a given input x, the function will return either 0, if x < 0, or x.
// This is used to find the activation of the hidden layer nodes during forward propagation.
function relu(x) {
    return iterator(x, x => ((x > 0) * x))
}
// The derivative of the activation function above, this is used during the backward propagation and gradient descent process to find 
// the updated for weights between the input and hidden layer nodes.
function reluDeriv(x) {
    return iterator(x, x => ((x > 0) ? 1 : 0))
}
// A helper method to apply either of the functions above to an numjs array of arbitrary size.
function iterator(x, fn) {
    let out = x.slice().tolist()

    for (let i = 0; i < out.length; i++) {
        for (let j = 0; j < out[i].length; j++) {
            out[i][j] = fn(out[i][j])
        }
    }

    return nj.array(out)
}
// The training data for the XOR gate, e.g. XOR with inputs A=0, B=0 returns 0
const inputs = nj.array([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
])
const outputs = nj.array([[0, 1, 1, 0]]).T
// The learning rate, alpha
const alpha = 0.2
// The number of hidden layer nodes in network
const hiddenSize = 3
// The weights connecting the layers, randomly generated between -1 and +1
// let inputHiddenWeights = nj.random([2, hiddenSize]).multiply(2).subtract(1)
let inputHiddenWeights = nj.array([
    [ 0.96003, 0.77081, 0.81631],
    [ 0.14657, 0.66646,-0.03392]
])
// let hiddenOutputWeights = nj.random([hiddenSize, 1]).multiply(2).subtract(1)
let hiddenOutputWeights = nj.array([
    [ 0.70935],
    [-0.94073],
    [ 0.44186]
])
// The backpropagation learning algoritm run over an arbitrary number of iterations
for (let iteration = 0; iteration < 60; iteration++) {
    // Network error
    let error = 0

    for (let i = 0; i < inputs.shape[0]; i++) {
        // Forward propagation, find activation at each layer, or just read from training data at input layer
        let inputLayer = inputs.slice([i, i + 1])
        let hiddenLayer = relu(nj.dot(inputLayer, inputHiddenWeights))
        let outputLayer = nj.dot(hiddenLayer, hiddenOutputWeights)

        // Network error calculated using squared error
        error = nj.add(error, nj.sum(nj.power((nj.subtract(outputLayer, outputs.slice([i, i + 1]))), 2)))

        // Calculate weight update by finding derivative of error function with respect to weight and subtract from previous weight.
        // The "delta" variables are just for the sake of reusability.
        let outputLayerDelta = nj.subtract(outputLayer, outputs.slice([i, i + 1]))
        let hiddenLayerDelta = nj.multiply(outputLayerDelta.dot(hiddenOutputWeights.T), reluDeriv(hiddenLayer))
        hiddenOutputWeights = nj.subtract(hiddenOutputWeights, hiddenLayer.T.dot(outputLayerDelta).multiply(alpha))
        inputHiddenWeights = nj.subtract(inputHiddenWeights, inputLayer.T.dot(hiddenLayerDelta).multiply(alpha))
    }
    // This is just for bookkeeping
    if (iteration % 10 == 9) {
        console.log(`Error: ${error.tolist()}`)
    }
}