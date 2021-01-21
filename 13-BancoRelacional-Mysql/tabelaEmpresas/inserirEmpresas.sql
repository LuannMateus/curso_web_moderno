ALTER TABLE empresas
MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 70245750000109),
    ('Vale', 65233420000163),
    ('Cielo', 52589036000156);

desc empresas;
desc prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;
SELECT * FROM empresas_unidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0);