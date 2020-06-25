const { Pool } = require('pg');


const pool = new Pool({
  user: 'juliman',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [cohortName]
const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort 
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher;
`;

pool.query(queryString, values)
.then(res => {
  // console.log(res.rows)
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));
