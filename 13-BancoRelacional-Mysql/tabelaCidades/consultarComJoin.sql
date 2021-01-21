-- Sem o INNER JOIN.
SELECT
    e.nome as Estado,
    c.nome as Cidade,
    regiao as regiao
FROM estados e, cidades c
WHERE (e.id = c.estado_id);

-- Com INNER JOIN.
SELECT 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e
INNER JOIN cidades c ON (e.id = c.estado_id);

SELECT *
FROM estados e
LEFT JOIN cidades c ON (e.id = c.estado_id);

SELECT *
FROM estados e
RIGHT JOIN cidades c ON (e.id = c.estado_id);