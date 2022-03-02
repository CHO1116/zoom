import express from "express";

const app = express();

app.set("view engine", "pug");									//configuring the view engine should be "pug"
app.set("views", __dirname + "/views");							//view 템플릿들이 위치한 경로(폴더) 설정
app.use("/public", express.static(__dirname + "/public"));		//create public URL and share some files with the user
app.get("/", (req, res) => res.render("home"));					//home.pug를 render해주는 route handler 생성
//end of "express" 나머지는 websocket을 통해 real-time으로 진행

const handleListen = () => console.log('Listening on http://localhost:3000');

app.listen(3000, handleListen);