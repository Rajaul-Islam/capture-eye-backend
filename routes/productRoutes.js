import express  from "express";
const router = express.Router() 

router.get("/", (req, res) => {
    res.json(products);
  });
  app.get("/:id", (req, res) => {
    const product = products.find((p) => p.id == req.params.id);
    res.json(product);
  });
export default router;
