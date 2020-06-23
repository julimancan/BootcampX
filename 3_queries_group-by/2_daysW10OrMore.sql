SELECT day, count(chapter) as total_assignments
FROM assignments
GROUP BY day
HAVING count(chapter) >= 10
ORDER BY day;