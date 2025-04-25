import pg from 'pg';
const { Client } = pg;

const connectionString = 'postgresql://postgres:QeqC8GD8CwjSojrE@fully-stunning-koala.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt';
const client = new Client({
  connectionString,
});

async function query() {
    try {
        await client.connect();
        const { rows } = await client.query(
            //'INSERT INTO students (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *',
            //['Andrio', 'Adolfov', 'adolf@example.com', '+30434343243']
            'SELECT * FROM students WHERE first_name = $1',
            ['Andrio']
          );
        console.log(rows); 
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        await client.end(); 
    }
}

query().then(() => console.log('done'));
