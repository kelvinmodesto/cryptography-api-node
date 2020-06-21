import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
  res.send("Hi");
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running in port number ${PORT}`);
})