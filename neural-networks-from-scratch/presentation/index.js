// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  andChart: require("../assets/and_chart.png"),
  andChartWithBoundary: require("../assets/and_chart_with_boundary.png"),
  backpropagationExample: require("../assets/backpropagation_example.png"),
  errorFunction: require("../assets/error_function.png"),
  errorFunctionDivergenceExample: require("../assets/error_function_divergence_example.png"),
  errorFunctionWeightUpdate: require("../assets/error_function_weight_update.png"),
  errorFunctionWithDerivative: require("../assets/error_function_with_derivative.png"),
  hiddenLayerHighlighted: require("../assets/hidden_layer_highlighted.png"),
  linearExampleNoHiddenLayer: require("../assets/linear_example_no_hidden_layer.png"),
  linearExampleWithHiddenLayer: require("../assets/linear_example_with_hidden_layer.png"),
  multipleInputsToSingleOutputWithWeights: require("../assets/multiple_inputs_to_single_output_with_weights.png"),
  singleInputToSingleOutput: require("../assets/single_input_to_single_output.png"),
  threeLayerNetwork: require("../assets/three_layer_network.png"),
  xorChart: require("../assets/xor_chart.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#2D2D2D"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress={"bar"} transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Join at sli.do with <Link textColor="tertiary" href={"https://app.sli.do/?search=NeuralNetworks"}>#NeuralNetworks</Link>
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Neural Networks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            from scratch
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            from scratch*
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            <Link textColor="quartenary" href={"https://github.com/nicolaspanel/numjs"}>numjs</Link>
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Overview
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            investigate a <br/> learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            determine correct output of XOR gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            build feed-forward network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            gonna get deep
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            implement <br/> backpropagation <br/> algorithm
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            work through <br/> three stages:
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            1. forward <br/> propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            2. error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            3. backward propagation & <br />
            gradient descent
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Introduction
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            web developer <Link textColor="tertiary" href={"https://twitter.com/OpenTableTechUK"}>@OpenTable</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            my machine learning journey started in 2016
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            "learn, do, learn, teach"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            why the hype?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            better performance than traditional ML approaches
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            generic solutions
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            what are we trying <br/> to achieve with a <br/> neural network?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            learn how to determine output for given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            supervised learning
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            training data
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            train by matching inputs to known outputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            move to test case
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            "learning"?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            minimise network error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            adjust network in response to error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            find correlation between inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            correlation is where <br/> the magic happens
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Setup
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            XOR gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>A</TableHeaderItem>
                <TableHeaderItem>B</TableHeaderItem>
                <TableHeaderItem>A XOR B</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            input will be <br/> arrays of length 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            output value <br/> will be 1 or 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            network is made of layers and nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            nodes are our "neurons"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            layer is set of nodes with common inputs and outputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            input layer will <br/> be two nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            output layer will <br/> be one node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutputWithWeights} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            weight <br/> == <br/> strength of relationship
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            where do weights <br/> come from?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            randomly pick weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            influence how quickly network learns
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            sufficient to use <br/> normal distribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            mean = 0 <br/> standard deviation = 1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            choose weights between -1 and +1
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            restrictions come <br/> back to how <br/> quickly network learns
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/weight_initialisation.example")}
            margin="20px auto"
            style={{ "font-size": "0.7em" }}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            how do we get activation?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutputWithWeights}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = A * 0.4
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            general case of <br/> multiple inputs
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            get weighted sum of inputs to that node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutputWithWeights}/>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = A * 0.4 + B * 0.6
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = A * 0.4 + B * 0.6
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            remember this!
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            on layer-by-layer basis
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            use dot product
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = [A, B] • [0.4, 0.6]^T
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            numjs does this for us
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            all examples will <br/> be single node <br/> to single node
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            replace "multiplication" with "dot product"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            have a neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            we need to go deeper
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            AND gate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>A</TableHeaderItem>
                <TableHeaderItem>B</TableHeaderItem>
                <TableHeaderItem>A AND B</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>0</TableItem>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>0</TableItem>
                <TableItem>0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
                <TableItem>1</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            this can be solved with a linear neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.multipleInputsToSingleOutputWithWeights} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.andChart} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            output is <br/> linearly separable
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.andChartWithBoundary} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            condition for linear neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            exists correlation between input and output nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            back to XOR
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            requires deep learning neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            output not <br/> linearly separable
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.xorChart} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            need nonlinear behaviour
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            add hidden layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            hidden layer creates intermediate correlation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            correlation <br/> == <br/> some combination <br/> of nodes that <br/> produce an activation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            final network will have hidden layer of 3 nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            ... still linear
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.threeLayerNetwork} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            H = A * 0.4 + B * 0.6
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleWithHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = (A * 0.4 + B * 0.6) * 0.5
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = A * 0.2 + B * 0.3
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.linearExampleNoHiddenLayer} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            activation function introduces nonlinearities
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            ensures hidden layer activation not just reducible to sum of input nodes
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            O = A * 0.2 + B * 0.3
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            determines if node <br/> is "on" or "off"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            puts the "neural" <br/> in neural networks
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            relu function
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            if input &#60; 0 then return 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            else return input
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/relu.example")}
            margin="20px auto"
            style={{ "font-size": "0.7em" }}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            have deep learning neural network!
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            can implement <br/> backward propagation
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Forward propagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            iteratively find <br/> activation for <br/> given input
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            layer by layer
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            nodes • weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            relu(nodes • weights)
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/forward_propagation.example")}
            margin="20px auto"
            style={{ "font-size": "0.7em" }}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            network generates output
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Error calculation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            how do we know <br/> network output <br/> is any good?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            want network to <br/> learn training set
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            learning is just <br/> minimising the error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            use squared error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (output - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            error &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            the lower the <br/> value the better
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            easy to track
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/error.example")}
            margin="20px auto"
            style={{ "font-size": "0.7em" }}
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Backward propagation & <br/> gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            error tells us how <br/> well we're doing
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            how do we <br/> improve this?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            can only adjust weights
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            determine how <br/> change in given <br/> weight affects error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            update weights using gradient descent
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            case of single hidden layer node to output
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.backpropagationExample} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (output - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            output = activation * weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = H * w_ho
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = ((H * w_ho) - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error ~ w_ho ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunction} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            minimum is <br /> goal weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            for given change <br/> in weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            what is change <br/> in error?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            gradient descent <br/> is greedy
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            choose change in weight that changes error most
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            find the derivative
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunctionWithDerivative} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            ∆error = derivative * ∆weight
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            derivative ~ H * (O - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            derivative is weight update
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            change to weight is always negative of derivative
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunctionWeightUpdate} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weight -= activation * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            do this iteratively until converging to minimum
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            goal weight is <br /> global minimum
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            can guarantee* convergence to minimum
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            update to other weights connecting input and hidden layer is the same
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.backpropagationExample} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = H * w_ho
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.backpropagationExample} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            H = relu(A * w_ih)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            O = relu(A * w_ih) * w_ho
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            error = (relu(A * w_ih) * w_ho - target) ** 2
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            ... some calculus later ...
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            derivative ~ (output - target) * reluDeriv(A * w_ih) * A * w_ho
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            backward propagation is about error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            multiply by w_ho to back propagate error attribution
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.backpropagationExample} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            relu gave us <br /> an output &ge; 0
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            so either weight <br/> did or didn't <br/> contribute to error
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            reluDeriv = (x) => (x > 0 ? 1 : 0)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            1 == "did", 0 == "didn't"
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            found weight updates
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            do weights <br /> converge to goal?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            possible divergence of weight updates
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            derivative ~ activation * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.errorFunctionDivergenceExample} />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            learning rate
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            alpha
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            weight -= alpha * activation * (output - target)
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            alpha has impact on rate of convergence
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            just choose alpha <br/> that works for us
          </Text>
        </Slide>
        <Slide bgColor="quartenary" notes="">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/learning_rate.example")}
            margin="20px auto"
            style={{ "font-size": "0.5em" }}
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Run-through
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Recap
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            matched network to learning problem
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            created a deep learning neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            justified choices
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            demonstrated backpropagation
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" textSize="2.3em" bold>
            successfully trained deep learning neural network
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Join at sli.do with <Link textColor="tertiary" href={"https://app.sli.do/?search=NeuralNetworks"}>#NeuralNetworks</Link>
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Tom Martin <Link textColor="tertiary" href={"https://twitter.com/tpgmartin"}>@tpgmartin</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
