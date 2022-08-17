
CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	"name"      varchar(255),
    "message"   text,
    "date"      DATE NOT NULL,
    "likes"     SMALLINT DEFAULT 0 
);

INSERT INTO messages (name, message, date)
VALUES 
    ('Jimmy', 'This is cool', 'today'),
    ('Sean', 'Call me maybe', 'today'),
    ('Eric', 'Love this other thing', 'today'),
    ('Toby', 'I dont know about this man', 'today'),
    ('Kevin', 'Bro, my name is Kevin', 'today');
