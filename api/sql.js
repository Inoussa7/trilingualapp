import sql from 'mssql';

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: true,  // if you're on Azure
    trustServerCertificate: false  // if you're not using HTTPS
  }
};

export default async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Users');
    res.status(200).json(result.recordset);r
  } catch (err) {
    res.status(500).send(err.message);
  }
};
