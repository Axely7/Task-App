import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const getTask = async (req, res) => {
  const [resultado] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);

  if (resultado.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(resultado[0]);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};

export const deleteTask = (req, res) => {
  res.send("eliminando tarea");
};
