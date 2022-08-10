interface Pancake {
  flavour: String,
  cost: number,
  popular: boolean
}

const pancake1: Pancake = {
  flavour: "chocolate",
  cost: 5,
  popular: true
};

const pancake2: Pancake = {
  flavour: "plain",
  cost: 4,
  popular: false,
};

const pancake3: Pancake = {
  flavour: "blueberry",
  cost: 5,
  popular: true,
};

const pancake4: Pancake = {
  flavour: 'whole-grain',
  cost: 4,
  popular: false,
};

const pancakes: Pancake[] = [pancake1, pancake2, pancake3, pancake4];

module.exports = pancakes;