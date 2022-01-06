const express = require("express");
const app = express();
const port = 3000;
const reservations = require("./reservations.json");
const parkings = require("./parkings.json");



app.use(express.json());

app.get("/parkings", (req, res) => {
  res.status(200).json(parkings);
});

app.get("/parkings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const parking = parkings.find((parking) => parking.id === id);
  res.status(200).json(parking);
});

app.post("/parkings", (req, res) => {
  parkings.push(req.body);
  res.status(200).json(parkings);
});
app.put("/parkings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let parking = parkings.find((parking) => parking.id === id);
  (parking.name = req.body.name),
    (parking.city = req.body.city),
    (parking.type = req.body.type),
    res.status(200).json(parking);
});

app.delete("/parkings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let parking = parkings.find((parking) => parking.id === id);
  parkings.splice(parkings.indexOf(parking), 1);
  res.status(200).json(parkings);
});

////////////////////////////////////////////

// Réservations
app.get("/parkings/:id/reservations", (req, res) => {
  res.status(200).json(reservations);
});

app.get("/parkings/:id/reservations/:idReservation", (req, res) => {
    const parking = parseInt(req.params.id);  
  const idReservation = parseInt(req.params.idReservation);
  const reservation = reservations.find(
    (reservation) => reservation.id === idReservation, (reservation) =>  reservation.parking =req.body.parking, (reservation) => reservation.parkingId === parking
  );
  res.status(200).json(reservation);
});

app.post("/parkings/:id/reservations", (req, res) => {
    const parking = parseInt(req.params.id);
    const idReservation = parseInt(req.params.idReservation);  
  const reservation = reservations.find(
    (reservation) => reservation.id === idReservation, (reservation) =>  reservation.parking =req.body.parking, (reservation) => reservation.parkingId === parking
  );
  reservations.push(req, body);
  res.status(200).json(reservations);
});

app.put("/parkings/:id/reservations/:idReservation", (req, res) => {
    const parking = parseInt(req.params.id);
  const idReservation = parseInt(req.params.idReservation);
  const reservation = reservations.find(
    (reservation) => reservation.id === idReservation, (reservation) => reservation.parking =req.body.parking, (reservation) => reservation.parkingId === parking
  );
    (reservation.city = req.body.city),
    (reservation.clientName = req.body.clientName),
    (reservation.vehicle = req.body.vehicle),
    (reservation.licensePlate = req.body.licensePlate),
    (reservation.checkin = req.body.checkin),
    (reservation.checkout = req.body.checkout);
  res.status(200).json(reservation);
});

app.delete("/parkings/:id/reservations/:idReservation", (req, res) => {
    const parking = parseInt(req.params.id);
  const idReservation = parseInt(req.params.idReservation);
  const reservation = reservations.find(
    (reservation) => reservation.id === idReservation, (reservation) => reservation.parking =req.body.parking, (reservation) => reservation.parkingId === parking,
   
  );
  reservations.splice(reservations.indexOf(reservation), 1);
  res.status(200).json(reservation);
});

app.listen(port, () => {
  console.log(`I listening at http://localhost:${port}`);
});