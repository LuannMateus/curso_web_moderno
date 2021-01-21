UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA';

SELECT est.nome from estados est 
WHERE sigla = 'MA';

UPDATE estados
SET nome = 'Paraná',
    populacao = '11.32'
WHERE sigla = 'PR'
LIMIT 1;

SELECT est.nome, est.sigla, est.populacao
FROM estados est
WHERE sigla = 'PR';