SELECT * FROM prefeitos;
SELECT * FROM `cidades`;

INSERT INTO prefeitos 
    (nome, cidade_id)
VALUES 
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Grega', null);