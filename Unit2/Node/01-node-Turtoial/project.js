const http = require("http");
const os = require("os");
const user = os.userInfo();


http
  .createServer()
  .on(`request`, (req, res) => {
    if (req.url === "/") {
      res.end(
        `<h1>Welcome</h1>  <h2>To Start Type /start at the end of the url</h2>`
      );
    } else if (req.url === "/start") {
      res.end(`<h1>The start</h1>
       <h3>Rules</h3>
       <p>When you figure out the answer to the riddles type it at the end of the url just like how you got here there is 6 puzzles that you will have to solve<p>
       <p>All the answers will be all lowercase no spaces</p>
       <p>You may also ask for a hit just add /hit at the end of the url you are having problems with</p>
       <h5>Lets move to the first riddle Type in /firstriddle</h5>
       `);
    } else if (req.url === "/firstriddle") {
      res.end(`
        <h1>First Riddle answer carefully</h1>
        <h4>The more of this there is, the less you see. What is it?</h4>
       `);
    } else if (req.url === "/firstriddle/hint") {
      res.end(`
        <h1>First Riddle answer carefully</h1>
        <h4>The more of this there is, the less you see. What is it?</h4>
        <p>The more there is, the less light there is</p>
       `);
    } else if (req.url === "/darkness") {
      res.end(`
        <h1>Second Riddle answer carefully</h1>
        <h4>What is the answer to the second riddle</h4>
       `);
    } else if (req.url === "/darkness/hint") {
      res.end(`
        <h2>Second Riddle answer</h2> <h1>carefully</h1>
        <h4>What is the answer to the second riddle</h4>
       `);
    } else if (req.url === "/carefully") {
      res.end(`
          <h1>What is this is Morse Code?</h1>
          <p>--. . - / --- ..- -</p>
          <p>Type this all lowercase and no spaces</p>
       `);
    } else if (req.url === "/carefully/hint") {
      res.end(`
          <h1>What is this is Morse Code?</h1>
          <p>--. . - / --- ..- -</p>
          <a href="https://morsecode.world/international/translator.html" target="_blank">Use This Link</a>
       `);
    } else if (req.url === "/getout") {
      res.end(`
          <h1>Youve made it to the 4th riddle how intersting</h1>
          <h3>What can be broken but never held?</h3>
       `);
    } else if (req.url === "/getout/hint") {
      res.end(`
          <h1>Youve made it to the 4th riddle how intersting</h1>
          <h3>What can be broken but never held?</h3>
          <p>SoMetHiNg a FrIenD BrOkE WiTh ME</p>
       `);
    } else if (req.url === "/promise") { 
      // /uprightdownrightuprightuprightdownrightupright < is the answer
      res.end(`
          <h1>Now for the 5th one i wanted to change it up a big and do a maze</h1>
          <h2>Just type everyturn you would take in order useing up down right left</h2> 
          <img src="https://i.pinimg.com/736x/57/5d/86/575d86edadb2aa46ae0c8fdf3413b5c7.jpg"></img>
       `);
    } else if (req.url === "/promise/hint") { 
      // /uprightdownrightuprightuprightdownrightupright < is the answer
      res.end(`
          <h1>Now for the 5th one i wanted to change it up a big and do a maze</h1>
          <h2>Just type everyturn you would take in order useing up down right left</h2> 
          <img src="https://i.pinimg.com/736x/57/5d/86/575d86edadb2aa46ae0c8fdf3413b5c7.jpg"></img>
          <h2>Since I'm so nice I'll just give you the answer</h2>
          <p>/uprightdownrightuprightuprightdownrightupright</p>
       `);
    } else if (req.url === "/uprightdownrightuprightuprightdownrightupright") { 
     res.end(`
        <h1>Wow you made it to final riddle</h1>
        <h2>I speak without a mouth and hear without ears I have no body but I come alive with wind | What am I?</h2> 
       `);
    } else if (req.url === "/uprightdownrightuprightuprightdownrightupright/hint") { 
      res.end(`
        <h1>Wow you made it to final room Yell if you want no one will hear u expect you own Echo</h1>
        <h2>I speak without a mouth and hear without ears I have no body but I come alive with wind | What am I?</h2> 
       `);
    }else if (req.url === "/echo") { 
      res.end(`
        <h1>WeLl YoU sOlVEd ALl oUr rIdDlES</h1>
        <h2>WeLl DoNe ${user.username}</h2> 
       `);
    } else res.end(`<h1>So sorry but this is wrong</h1>`);
  })

  // .on(`load`,()=>{
  //     console.log("sever is listening")
  // })
  .listen(5000, () => {
    console.log("sever is listening on port 5000");
  });
