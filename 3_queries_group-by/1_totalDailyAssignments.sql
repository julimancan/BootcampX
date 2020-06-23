SELECT day, count(chapter) as total_assignments
FROM assignments
GROUP BY day
ORDER BY day;