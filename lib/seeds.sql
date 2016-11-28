BEGIN;

INSERT INTO grojjItems(item_id, name, price, condition, likes ,url, sellerid) VALUES

(1, 'Red Vintage Armchair', '$', 'Barely Used', 0, '', 1),
(2, 'I Love Lucy Mug', '$$', 'Used', 0, '',1 ),
(3, 'My walkman from 1996', '$', 'Used', 0, '', 1),
(4, 'Motorola Razr', '$', 'Used', 0, '', 2),
(5, 'John Deere hat', '$$', 'New', 0, '', 2),
(6, 'Ball and 10 jacks', '$', 'Used', 0, '', 2),
(7, 'Fig Newtons', '$', 'New', 0, '', 3),
(8, 'Bugs Bunny Looney Tunz jersey', '$$$', 'New', 0, '', 3),
(9, 'Hunger Games book trilogy', '$', 'Barely Used', 0, '', 4),
(10, 'Game of Risk', '$$', 'Used', 0, '', 4);

COMMIT;
