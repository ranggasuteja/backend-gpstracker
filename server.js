const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Send current time to all connected clients
function updateData(socket) {
  var updateData = [
    {
      id: "DVC001",
      latitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      longitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      heartRate: Math.floor(Math.random() * (300 - 1 + 1) + 1),
    },
    {
      id: "DVC002",
      latitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      longitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      heartRate: Math.floor(Math.random() * (300 - 1 + 1) + 1),
    },
    {
      id: "DVC003",
      latitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      longitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      heartRate: Math.floor(Math.random() * (300 - 1 + 1) + 1),
    },
    {
      id: "DVC004",
      latitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      longitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      heartRate: Math.floor(Math.random() * (300 - 1 + 1) + 1),
    },
    {
      id: "DVC005",
      latitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      longitude: Math.floor(Math.random() * (300 - 1 + 1) + 1),
      heartRate: Math.floor(Math.random() * (300 - 1 + 1) + 1),
    },
  ];
  socket.emit("update", updateData);
}

function getAllData() {
  return [
    {
      id: "DVC001",
      latitude: 100,
      longitude: 100,
      heartRate: 10,
    },
    {
      id: "DVC002",
      latitude: 200,
      longitude: 200,
      heartRate: 20,
    },
    {
      id: "DVC003",
      latitude: 300,
      longitude: 300,
      heartRate: 30,
    },
    {
      id: "DVC004",
      latitude: 400,
      longitude: 400,
      heartRate: 40,
    },
    {
      id: "DVC005",
      latitude: 500,
      longitude: 500,
      heartRate: 50,
    },
  ];
}

function sendAllData(socket) {
  socket.emit("devices", getAllData());
}

// Send current time every 10 secs
// setInterval(updateData, 10000);

// Initial connection
io.on("connection", function (socket) {
  socket.on("list of device", () => sendAllData(socket));
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
