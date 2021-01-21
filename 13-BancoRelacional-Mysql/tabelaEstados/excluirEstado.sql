DELETE FROM estados
WHERE sigla = 'MN'
LIMIT 1;

SELECT * FROM estados;

DELETE FROM estados
WHERE id >= 1000;