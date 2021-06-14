const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const port = process.env.port || 5000
const {
  json
} = require('body-parser');
const {
  finished
} = require('stream');
// const bodyParser = require("body-parser");

//JSON PARSING
// app.use(bodyParser.json());
app.use(express.json())

//UrlEncoded Data Parsing
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.static(path.join(__dirname, 'vendor')));
app.use(express.static(path.join(__dirname, 'master')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));



// app.get('/compete', function (req, res) {
//   let cor = req.query
//   var temp;
//   var i;
//   var val
//   let k
//   let al
//   let o
//   let p
//   let u
//   let conu = []
//   let conui = []
//   let result

//   fs.readFile('./compete.json', 'utf-8', (err, jsonString) => {
//     jsonString = jsonString.trim();
//     val = JSON.parse(jsonString);
//     let l = val.y.length


//     if (l != 24) {
//       fs.readFile('./reactionstore.json', 'utf-8', (err, jsonString) => {
//         jsonString = jsonString.trim();
//         temp = JSON.parse(jsonString);



//         start: while (1) {
//           i = Math.floor(Math.random() * (temp.length))
//           k = 1
//           if (l >= 8) {
//             for (let r = 0; r < (l / 8); r++) {

//               if ((temp[i].A == val.y[k]) && (temp[i].B == val.y[k + 2]) && (temp[i].C == val.y[k + 4]) && (temp[i].D == val.y[k + 6])) {
//                 continue start
//               }
//               k = k + 8

//             }
//           }
//           if (l == 0) {
//             u = 0
//             res.render("compete.pug", {
//               "datas": temp[i]
//             })
//           } else {

//             if ((cor.S == val.y[u]) && (cor.SO == val.y[u + 2]) && (cor.AV == val.y[u + 4]) && (cor.MR == val.y[u + 6])) {
//               result = "Correct"
//             } else {
//               result = "Wrong"
//             }

//             fs.readFile('./content.json', 'utf-8', (err, jsonString) => {
//               all = JSON.parse(jsonString)
//               for (let t = 0; t < (all.Q.length); t += 2) {
//                 if ((all.Q[t] == val.y[u]) || (all.Q[t] == val.y[u + 2]) || (all.Q[t] == val.y[u + 4]) || (all.Q[t] == val.y[u + 6])) {
//                   let s = t + 1;
//                   conui.push(all.Q[t])
//                   conui.push(all.Q[s])
//                 }
//               }

//               res.render("compete3.pug", {
//                 "datas": temp[i],
//                 "Result": result,
//                 "content": conui,
//               });

//             });
//             u = u + 8
//           }
//           val.y.push(temp[i].a)
//           val.y.push(temp[i].A)
//           val.y.push(temp[i].b)
//           val.y.push(temp[i].B)
//           val.y.push(temp[i].c)
//           val.y.push(temp[i].C)
//           val.y.push(temp[i].d)
//           val.y.push(temp[i].D)


//           val = JSON.stringify(val)
//           fs.writeFileSync('./compete.json', val)
//         }
//       })
//     } else {
//       fs.readFile('./reactionstore2.json', 'utf-8', (err, jsonString) => {
//         jsonString = jsonString.trim();
//         temp = JSON.parse(jsonString);


//         fs.readFile('./compete2.json', 'utf-8', (err, jsonString) => {
//           jsonString = jsonString.trim();
//           al = JSON.parse(jsonString);
//           let o = al.y.length
//           start: while (1) {
//             i = Math.floor(Math.random() * (temp.length))
//             p = 1
//             if (o >= 8) {
//               for (let r = 0; r < (o / 8); r++) {
//                 if ((temp[i].A == al.y[p]) && (temp[i].B == al.y[p + 2]) && (temp[i].C == al.y[p + 4]) && (temp[i].D == al.y[p + 6])) {
//                   continue start
//                 }
//                 p = p + 8

//               }
//             }
//             if (o == 0) {
//               u = 0
//               res.render("compete2.pug", {
//                 "datas": temp[i]
//               })
//             } else {

//               if ((cor.S == val.y[u]) && (cor.SO == val.y[u + 2]) && (cor.AV == val.y[u + 4]) && (cor.MR == val.y[u + 6])) {
//                 result = "Correct"
//               } else {
//                 result = "Wrong"
//               }

//               fs.readFile('./content.json', 'utf-8', (err, jsonString) => {
//                 all = JSON.parse(jsonString)
//                 for (let t = 0; t < (all.Q.length); t += 2) {
//                   if ((all.Q[t] == val.y[u]) || (all.Q[t] == val.y[u + 2]) || (all.Q[t] == val.y[u + 4]) || (all.Q[t] == val.y[u + 6])) {
//                     let s = t + 1;
//                     conu.push(all.Q[t])
//                     conu.push(all.Q[s])
//                   }
//                 }

//                 res.render("compete4.pug", {
//                   "datas": temp[i],
//                   "Result": result,
//                   "content": conu,
//                 });

//               });
//               u = u + 8
//             }

//             al.y.push(temp[i].a)
//             al.y.push(temp[i].A)
//             al.y.push(temp[i].b)
//             al.y.push(temp[i].B)
//             al.y.push(temp[i].c)
//             al.y.push(temp[i].C)
//             al.y.push(temp[i].d)
//             al.y.push(temp[i].D)

//             if (al.y.length == 16) { //we cannot write o in place of al.y.length because o has taken fixed value before only
//               for (let j = 0; j < 17; j++) {
//                 al.y.shift()
//               }
//               for (let j = 0; j < 25; j++) {
//                 val.y.shift()
//               }
//               val = JSON.stringify(val)
//               fs.writeFileSync('./compete.json', val)
//             }

//             al = JSON.stringify(al)
//             fs.writeFileSync('./compete2.json', al)
//           }
//         })


//       });
//     }
//   });
// });


app.get('/compete', function (req, res) {

  let val
  let temp
  let i
  let l = 1
  let h = []
  let al
  let p = []
  let g = []
  let u = []




  fs.readFile('./compete.json', 'utf-8', (err, jsonString) => {
    jsonString = jsonString.trim();
    val = JSON.parse(jsonString);


    fs.readFile('./reactionstore.json', 'utf-8', (err, jsonString) => {
      jsonString = jsonString.trim();
      temp = JSON.parse(jsonString);



      start: while (l) {
        i = Math.floor(Math.random() * (temp.length))
        h.push(i)


        if ((val.y.length) == 0) {
          g.push(i)
          val.y.push(temp[i].a)
          val.y.push(temp[i].A)
          val.y.push(temp[i].b)
          val.y.push(temp[i].B)
          val.y.push(temp[i].c)
          val.y.push(temp[i].C)
          val.y.push(temp[i].d)
          val.y.push(temp[i].D)

        } else {
          for (let m = 0; m < ((h.length) - 1); m++) {
            if (i == h[m]) {
              continue start
            }
          }

          g.push(i)

          val.y.push(temp[i].a)
          val.y.push(temp[i].A)
          val.y.push(temp[i].b)
          val.y.push(temp[i].B)
          val.y.push(temp[i].c)
          val.y.push(temp[i].C)
          val.y.push(temp[i].d)
          val.y.push(temp[i].D)

          if ((g.length) == 3) {
            l = 0
          }



        }
      }

      l = 1
      fs.readFile('./reactionstore2.json', 'utf-8', (err, jsonString) => {
        jsonString = jsonString.trim();
        temp = JSON.parse(jsonString);


        fs.readFile('./compete2.json', 'utf-8', (err, jsonString) => {
          jsonString = jsonString.trim();
          al = JSON.parse(jsonString);

          start2: while (l) {
            i = Math.floor(Math.random() * (temp.length))
            p.push(i)


            if ((al.y.length) == 0) {
              u.push(i)

              al.y.push(temp[i].a)
              al.y.push(temp[i].A)
              al.y.push(temp[i].b)
              al.y.push(temp[i].B)
              al.y.push(temp[i].c)
              al.y.push(temp[i].C)
              al.y.push(temp[i].d)
              al.y.push(temp[i].D)



            } else {
              for (let m = 0; m < ((p.length) - 1); m++) {
                if (i == p[m]) {
                  continue start2
                }
              }

              u.push(i)

              al.y.push(temp[i].a)
              al.y.push(temp[i].A)
              al.y.push(temp[i].b)
              al.y.push(temp[i].B)
              al.y.push(temp[i].c)
              al.y.push(temp[i].C)
              al.y.push(temp[i].d)
              al.y.push(temp[i].D)

              if ((u.length) == 2) {
                l = 0
              }



            }





          }

          if((al.y.length)==32){
            for(let i=0; i<16; i++){
              al.y.shift()
            }
          }

          if((val.y.length)==48){
            for(let i=0; i<24; i++){
              val.y.shift()
            }
          }
          res.render("compete.pug", {
            "datas": val,
            "datas2": al
          })


          val = JSON.stringify(val)
          fs.writeFileSync('./compete.json', val)


          al = JSON.stringify(al)
          fs.writeFileSync('./compete2.json', al)


        })


      });




    })

  });

})

app.get('/competebalance', function (req, res) {
  let temp=req.query
  let k=0
  let u=[]
  let o=0

  fs.readFile('./compete.json', 'utf-8', (err, jsonString)=>{
    let val=JSON.parse(jsonString)
    for(let i=0; i<3;i++){
    
    if((val.y[k]==temp.S[i])&&(val.y[k+2]==temp.SO[i])&&(val.y[k+4]==temp.AV[i])&&(val.y[k+6]==temp.MR[i])){
       o=o+1
    }

    k=k+8

  }

  fs.readFile('./compete2.json', 'utf-8', (err, jsonString)=>{
    k=0
    let al=JSON.parse(jsonString)
    for(let i=3; i<5;i++){
    if((al.y[k]==temp.S[i])&&(al.y[k+2]==temp.SO[i])&&(al.y[k+4]==temp.AV[i])&&(al.y[k+6]==temp.MR[i])){
       o=o+1
    }
    k=k+8

  }

  
  res.render('competeoutput.pug',{
    "datas": val,
    "datas2": al,
    "correct":o
  })

  for(let i=0; i<24; i++){
    val.y.shift()
  }

  for(let i=0; i<16; i++){
    al.y.shift()
  }

  val = JSON.stringify(val)
  al = JSON.stringify(al)

  fs.readFile('./analysis.json', 'utf-8', (err,jsonString)=>{
    u=JSON.parse(jsonString)
    u.y.push(o)

    if((u.y.length)==11){
      u.y.shift()
    }

    u=JSON.stringify(u)
    fs.writeFileSync('./analysis.json', u);
    
  })


  fs.writeFileSync('./compete.json', val);
  fs.writeFileSync('./compete2.json', al);

})
})



})



app.get('/analysis', function (req, res) {

  let p=[]
  let r
    fs.readFile('./analysis.json', 'utf-8', (err,jsonString)=>{
     let u=JSON.parse(jsonString)
     let l=0

     for(let i=0; i<(u.y.length); i++){
       l=u.y[i]+l
       t=(u.y[i]).toString()
       r="Got "+ t +" correct out of 5"
       p.push(r)
     }
     l=l/u.y.length
     res.render('analysis.pug', {
      "datas": p,
      "datas2": l,
      "datas3": u.y.length
     })

    })

})
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/solver', function (req, res) {
  res.sendFile(path.join(__dirname + '/solver.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about-us', function (req, res) {
  res.sendFile(path.join(__dirname + '/about-us.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
  //__dirname : It will resolve to your project folder.
});



app.get('/searchbar', function (req, res) {
  var temp = req.query
  temp.no = temp.no.split(" ")
  temp.no = temp.no.join("")
  temp.no = temp.no.split("+")

  let al

  let len = temp.no.length
  if (len == 2) {
    fs.readFile('./reactionstore.json', 'utf-8', (err, jsonString) => {
      jsonString = jsonString.trim();
      let val = JSON.parse(jsonString);
      for (let i = 0; i < val.length; i++) {

        if (((temp.no[0] == val[i].A) && (temp.no[1] == val[i].B)) || ((temp.no[0] == val[i].B) && (temp.no[1] == val[i].A))) {

          res.render("reaction.pug", {
            "datas": val[i]
          });
          let value = JSON.stringify(val[i])

          fs.readFile('./recentsearches.json', 'utf-8', (err, jsonString) => {
            jsonString = jsonString.trim();
            al = JSON.parse(jsonString);

            al.y.push(val[i].a)
            al.y.push(val[i].A)
            al.y.push("+")
            al.y.push(val[i].b)
            al.y.push(val[i].B)
            al.y.push("----->>>")
            al.y.push(val[i].c)
            al.y.push(val[i].C)
            al.y.push("+")
            al.y.push(val[i].d)
            al.y.push(val[i].D)

            if (al.y.length == 66) {
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
            }

            al = JSON.stringify(al)

            fs.writeFile('./recentsearches.json', al, (err, jsonString) => {
              console.log("allset0")

            });

          });






          fs.writeFileSync('./store.json', value);

        }

      }

      let va = "The reaction you searched for didn't found."
      res.render("solver.pug", {
        "datas": va
      });


    })
    //   fs.readFile('./store.json', 'utf-8', (err, jsonString) => {
    //     jsonString = jsonString.trim();
    //     al = JSON.parse(jsonString);
    // console.log(al)     

    // fs.readFile('./recentsearches.json', 'utf-8', (err, jsonString) => {
    //     jsonString = jsonString.trim();
    //      k=  JSON.parse(jsonString);
    //      k.y.push(al.a)
    //     k.y.push(al.A)
    //          k.y.push("+")
    //    k.y.push(al.b)
    //    k.y.push(al.B)
    // k.y.push("+")
    // k.y.push(al.c)
    // k.y.push(al.C)
    // k.y.push("----->>>")
    // k.y.push(al.d)
    // k.y.push(al.D)
    // console.log(k)     
    // })
    // })

  }



  if (len == 3) {
    fs.readFile('./reactionstore2.json', 'utf-8', (err, jsonString) => {
      jsonString = jsonString.trim();
      let val = JSON.parse(jsonString);
      for (let i = 0; i < val.length; i++) {

        if (((temp.no[0] == val[i].A) && (temp.no[1] == val[i].B) && (temp.no[2] == val[i].C)) || ((temp.no[0] == val[i].B) && (temp.no[1] == val[i].A) && (temp.no[2] == val[i].C)) || ((temp.no[0] == val[i].B) && (temp.no[1] == val[i].C) && (temp.no[2] == val[i].A)) || ((temp.no[0] == val[i].A) && (temp.no[1] == val[i].C) && (temp.no[2] == val[i].B)) || ((temp.no[0] == val[i].C) && (temp.no[1] == val[i].B) && (temp.no[2] == val[i].A)) || ((temp.no[0] == val[i].C) && (temp.no[1] == val[i].A) && (temp.no[2] == val[i].B))) {

          res.render("reaction2.pug", {
            "datas": val[i]
          });
          let value = JSON.stringify(val[i])

          fs.readFile('./recentsearches2.json', 'utf-8', (err, jsonString) => {


            jsonString = jsonString.trim();
            al = JSON.parse(jsonString);
            al.y.push(val[i].a)
            al.y.push(val[i].A)
            al.y.push("+")
            al.y.push(val[i].b)
            al.y.push(val[i].B)
            al.y.push("+")
            al.y.push(val[i].c)
            al.y.push(val[i].C)
            al.y.push("----->>>")
            al.y.push(val[i].d)
            al.y.push(val[i].D)

            if (al.y.length == 66) {
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();
              al.y.shift();

            }

            al = JSON.stringify(al)


            fs.writeFile('./recentsearches2.json', al, (err, finished) => {
              console.log("all set")
            });
          });
          fs.writeFileSync('./store.json', value);


        }



      }
      let va = "The reaction you searched for didn't found."
      res.render("solver.pug", {
        "datas": va
      });
    })
  }



})

app.get('/balance', function (req, res) {
  var temp = req.query
  var result
  var value;
  let all;
  let con = []
  let variable
  let variable2

  fs.readFile('./store.json', 'utf-8', (err, jsonString) => {
    value = JSON.parse(jsonString)

    if ((temp.S == value.a) && (temp.SO == value.b) && (temp.AV == value.c) && (temp.MR == value.d)) {
      result = "Correct"
    } else {
      result = "Wrong"
    }

    fs.readFile('./content.json', 'utf-8', (err, jsonString) => {
      all = JSON.parse(jsonString)
      for (let i = 0; i < (all.Q.length); i += 2) {
        if ((all.Q[i] == value.A) || (all.Q[i] == value.B) || (all.Q[i] == value.C) || (all.Q[i] == value.D)) {
          let l = i + 1;
          con.push(all.Q[i])
          con.push(all.Q[l])
        }
      }
      fs.readFile('./recentsearches.json', 'utf-8', (err, jsonString) => {
        variable = JSON.parse(jsonString)
        fs.readFile('./recentsearches2.json', 'utf-8', (err, jsonString) => {
          variable2 = JSON.parse(jsonString)

          res.render("output.pug", {
            "datas": value,
            "Result": result,
            "content": con,
            "recent": variable,
            "recent2": variable2
          });
        });
      });

    });

  });

});

app.get('/balance2', function (req, res) {
  var temp = req.query
  var result
  var value;
  let all;
  let con = []
  let variable2
  let variable

  fs.readFile('./store.json', 'utf-8', (err, jsonString) => {
    value = JSON.parse(jsonString)

    if ((temp.S == value.a) && (temp.SO == value.b) && (temp.AV == value.c) && (temp.MR == value.d)) {
      result = "Correct"
    } else {
      result = "Wrong"
    }
    fs.readFile('./content.json', 'utf-8', (err, jsonString) => {
      all = JSON.parse(jsonString)

      for (let i = 0; i < (all.Q.length); i += 2) {
        if ((all.Q[i] == value.A) || (all.Q[i] == value.B) || (all.Q[i] == value.C) || (all.Q[i] == value.D)) {
          let l = i + 1;
          con.push(all.Q[i])
          con.push(all.Q[l])
        }
      }
      fs.readFile('./recentsearches2.json', 'utf-8', (err, jsonString) => {
        variable2 = JSON.parse(jsonString)
        fs.readFile('./recentsearches.json', 'utf-8', (err, jsonString) => {
          variable = JSON.parse(jsonString)
          res.render("output2.pug", {
            "datas": value,
            "Result": result,
            "content": con,
            "recent": variable,
            "recent2": variable2
          });
        });
      });

    });
  });

});

// app.get("/recentsearches", (req,res)=>{
//   fs.readFile('./recentsearches.json','utf8', function(err, jsondata){ 
//       if (err) {
//           throw err;
//         }
//   res.send(JSON.parse(jsondata));

//   }); 
// });

// app.get("/recentsearches2", (req,res)=>{
//   fs.readFile('./recentsearches2.json','utf8', function(err, jsondata){ 
//       if (err) {
//           throw err;
//         }
//   res.send(JSON.parse(jsondata));

//   }); 
// });







//add the router
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');