note_duration = 4096,
CHANNEL1=`RR`,
CHANNEL2=`0`,
CHANNEL3=`0`,
CHANNEL4=`0`,

C2 = 65.41,
Db2 = 69.30,
D2 = 73.42,
Eb2 = 77.78,
E2 = 82.41,
F2 = 87.31,
Gb2 = 92.50,
G2 = 98,
Ab2 = 103.83,
A2 = 110,
Bb2 = 116.54,
B2 = 123.47,
C3 = 130.81,
Db3 = 138.59,
D3 = 146.83,
Eb3 = 155.56,
E3 = 164.81,
F3 = 174.61,
Gb3 = 185,
G3 = 196,
Ab3 = 207.65,
A3 = 220,
Bb3 = 233.08,
B3 = 246.94,
C4 = 261.63,
Db4 = 277.18,
D4 = 293.66,
Eb4 = 311.13,
E4 = 329.63,
F4 = 349.23,
Gb4 = 369.99,
G4 = 392,
Ab4 = 415.30,
A4 = 440,
Bb4 = 466.16,
B4 = 493.88,
C5 = 523.25,
RR = 0,
console.log("CHAN3SOUND = (-((cbrt(t & 8191) * 4 & 3)) * (t / 4096 % 2 - 2.75) * 20 - 128)");
console.log("CHAN4SOUND = ((t & 2 ? (random() - random()) : 0) * (t / 4096 % 2 - 2.75) * 20 - 128)");
let CHAN1 = CHANNEL1.split(",");
let n = 0;
while (n < CHAN1.length) {
    console.log("t > " + (note_duration * n) + " && t < " + (note_duration * (n + 1)) + " ? " + "(t / 192) * " + CHAN1[n] + ":");
  n++;
};
    console.log("0+");
let CHAN2 = CHANNEL2.split(",");
let i = 0;
while (i < CHAN2.length) {
    console.log("t > " + (note_duration * i) + " && t < " + 
    (note_duration * (i + 1)) + " ? " + "random() * " + CHAN2[i] + ":");
    i++;
};
    console.log("0+");
let CHAN3 = CHANNEL3.split(",");
let k = 0;
while (k < CHAN3.length) {
    console.log("t > " + (note_duration * k) + " && t < " + 
    (note_duration * (k + 1)) + " ? " + "CHAN3SOUND * " + CHAN3[k] + ":");
    k++;
};
    console.log("0+");
    let CHAN4 = CHANNEL4.split(",");
let s = 0;
while (s < CHAN4.length) {
    console.log("t > " + (note_duration * s) + " && t < " + 
    (note_duration * (s + 1)) + " ? " + "CHAN4SOUND * " + CHAN4[s] + ":");
    s++;
};
    console.log("0");
