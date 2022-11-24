const { buildSchema } = require('graphql');

exports.schemas = buildSchema(`
    type Query {
        hello: String,
        hoge: String,
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

exports.functions = {
  hello: () => {
    return 'Hello world!';
  },
  hoge: () => {
    return 'hoge world!';
  },
  rollDice: (args) => {
    var output = [];
    for (var i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
    }
    return output;
  }
};
