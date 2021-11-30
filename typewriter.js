const sentence = "hello there from lighthouse labs";

let time = 0;

for (let i in sentence) {
  
  time += 50;
  setTimeout(() => {
    
    if (Number(i) === sentence.length - 1) {
      console.log(sentence[i]);
    } else {
      process.stdout.write(sentence[i]);
    }

  }, time);
}
