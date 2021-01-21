SELECT * FROM estados;

SELECT * FROM cidades;


-- INSERT INTO cidades (
--     nome, area, estado_id
-- ) VALUES (
--     'Campinas', 795, 33
-- );

-- INSERT INTO cidades (
--     id, nome, area, estado_id
-- ) VALUES (
--     2, 'Niterói', 133.9, 27
-- );

-- INSERT INTO cidades (
--     id, nome, area, estado_id
-- ) VALUES (
--     3,
--     'Caruaru', 
--     920,
--     (SELECT id FROM estados WHERE sigla = 'PE')
-- );

INSERT INTO cidades (
    id, nome, area, estado_id
) VALUES (
    4,
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
);
