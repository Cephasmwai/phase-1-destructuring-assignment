const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings


const [moo, neigh, baa, oink, cluck] = ["cow", "horse", "sheep", "pig", "chicken"];


const { bessie, dolly, babe, little } = { bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken" };


const { blackAndWhite, black, pink } = { blackAndWhite: "cow", black: "sheep", pink: "pig" };

// Arrays


const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


const [r, o, y, g, b, , v] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


const [, , , , , indg] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


// Objects

const { muppetName, color, song, job, partner } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { songs: [, song2, , song4], nestedJob, nestedPartner } = {
  songs: ["The Rainbow Connection", "Moving Right Along", "Never Before, Never Again", "I Hope That Something Better Comes Along"],
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};
