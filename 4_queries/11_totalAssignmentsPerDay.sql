SELECT day, count(id), sum(duration) AS duration
FROM assignments
GROUP BY day 
ORDER BY day;