let Name = prompt ("Welcome to Coffey's Mini Golf! What is your name?");
let Holes = prompt ("Hello, " + Name + "! How many holes would you like to play, 3 or 6?");
if (Holes === "3") {
    let Par = 9;
    let Hole1 = prompt ("How many puts for hole 1? (par: 3)");
    let Hole2 = prompt ("How many puts for hole 2? (par: 3)");
    let Hole3 = prompt ("How many puts for hole 3? (par: 3)");
    let x = parseInt(Hole1);
    let y = parseInt(Hole2);
    let z = parseInt(Hole3);
    let score = (x + y + z); 
    let Final = score - Par
    console.log(`Good game, ${Name}! Your total par is ${Final}`);
}
else if (Holes === "6") {
    let Par = 18;
    let Hole1 = prompt ("How many puts for hole 1? (par: 3)");
    let Hole2 = prompt ("How many puts for hole 2? (par: 3)");
    let Hole3 = prompt ("How many puts for hole 3? (par: 3)");
    let Hole4 = prompt ("How many puts for hole 4? (par: 3)");
    let Hole5 = prompt ("How many puts for hole 5? (par: 3)");
    let Hole6 = prompt ("How many puts for hole 6? (par: 3)");
    let x = parseInt(Hole1);
    let y = parseInt(Hole2);
    let z = parseInt(Hole3);
    let a = parseInt(Hole4);
    let b = parseInt(Hole5);
    let c = parseInt(Hole6);
    let score = (x + y + z + a + b + c); 
    let Final = score - Par
    console.log(`Good game, ${Name}! Your total par is ${Final}`);
}
else {
    console.log(`Sorry. ${Holes} is an invalid option. Please select either 3 or 6`);
}