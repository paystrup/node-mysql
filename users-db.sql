-- Delete a database
DROP DATABASE IF EXISTS users_db;

-- Create a database
CREATE DATABASE users_db;

-- Select and use database, users_db
USE users_db;

-- Create a New Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(100),
    image TEXT
);

-- insert
INSERT INTO users (name, mail, title, image) VALUES ('Peter Lind', 'petl@kea.dk', 'Senior Lecturer', 'https://share.cederdorff.dk/images/petl.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Rasmus Cederdorff', 'race@dev.dk', 'Senior Lecturer', 'https://share.cederdorff.dk/images/race.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Lars Bogetoft', 'larb@eaaa.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/larb.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Edith Terte', 'edan@kea.dk', 'Lecturer', 'https://media.licdn.com/dms/image/C4E03AQE6nx7oUPqo_g/profile-displayphoto-shrink_800_800/0/1643707886591?e=1697673600&v=beta&t=Qp4GcxVlJfsZi4t-if6YJ6O1u7bH2oLwWgVxB-X5Nt4');
INSERT INTO users (name, mail, title, image) VALUES ('Frederikke Bender', 'fbe@kea.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/fbe.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Murat Kilic', 'mki@eaaa.dk', 'Senior Lecturer', 'https://www.eaaa.dk/media/llyavasj/murat-kilic.jpg?width=800&height=450&rnd=133401946552600000');
INSERT INTO users (name, mail, title, image) VALUES ('Anne Kirketerp', 'anki@eaaa.dk', 'Head of Education', 'https://www.eaaa.dk/media/5buh1xeo/anne-kirketerp.jpg?width=800&height=450&rnd=133403878321500000');
INSERT INTO users (name, mail, title, image) VALUES ('Dan Okkels Brendstrup', 'dob@eaaa.dk','Lecturer', 'https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?width=850&height=450&v=1da0d9b0310b710');