SELECT 
    regiao as 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc;

SELECT 
    AVG (populacao) as Total
FROM estados;

SELECT 
    SUM (populacao) as Total
FROM estados;