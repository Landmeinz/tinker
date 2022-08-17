
CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	name varchar(255),
    message text,
);

INSERT INTO messages (name, message)
VALUES 
    ('Jimmy', 'This is cool'),
    ('Sean', 'Call me maybe');
