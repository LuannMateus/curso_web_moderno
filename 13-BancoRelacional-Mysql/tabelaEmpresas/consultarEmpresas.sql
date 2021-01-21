SELECT e.nome Empresa, c.nome as Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id 
AND c.id = eu.cidade_id 
AND sede;

SELECT e.nome Empresa, c.nome as Cidade
FROM empresas_unidades eu
INNER JOIN empresas e, cidades c
WHERE e.id = eu.empresa_id AND c.id = eu.cidade_id AND eu.sede; 