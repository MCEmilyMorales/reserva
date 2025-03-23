import { Request, Response, NextFunction } from "express";

export default function auth(req: Request, res: Response, next: NextFunction) {
  const { token } = req.headers;
  const tokenHarcodeado = "autenticado";

  if (token === tokenHarcodeado) next();
  else res.status(400).json({ message: "Error. Falta autenticacion" });
}
