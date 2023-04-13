INSERT INTO polls (email, title, description, admin_link, vote_link) VALUES ('LHL_DecisionMaker@outlook.com', 'WHICH MOVIE?', 'I CAN''T CHOSE MYSELF', 'https://www.adminlink1.com', 'https://www.votelink1.com');
INSERT INTO polls (email, title, description, admin_link, vote_link) VALUES ('LHL_DecisionMaker@outlook.com', 'WHICH SONG?', 'I CAN''T CHOSE MYSELF', 'https://www.adminlink2.com', 'https://www.votelink2.com');

INSERT INTO options (poll_id, title, description) VALUES (1, 'The Hobbit', 'FANTASY');
INSERT INTO options (poll_id, title, description) VALUES (1, 'The Truman Show', 'COMEDY');
INSERT INTO options (poll_id, title, description) VALUES (1, 'Iron Man', 'Action movie');
INSERT INTO options (poll_id, title, description) VALUES (1, 'Moana', 'Cartoon movie');
INSERT INTO options (poll_id, title, description) VALUES (1, 'Almost Famous', 'My personal favourite');
INSERT INTO options (poll_id, title, description) VALUES (1, 'No movie at all', 'Or we could go out for dinner');

INSERT INTO options (poll_id, title, description) VALUES (2, 'Gangsta''s Paradise', 'Coolio');
INSERT INTO options (poll_id, title, description) VALUES (2, 'Waterfalls', 'TLC');
INSERT INTO options (poll_id, title, description) VALUES (2, 'Fantasy', 'Mariah Carey');

INSERT INTO rankings (option_id, voter_name, rank) VALUES (1, 'Alex', 1);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (2, 'Alex', 3);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (3, 'Alex', 2);

INSERT INTO rankings (option_id, voter_name, rank) VALUES (1, 'John', 3);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (2, 'John', 2);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (3, 'John', 1);

INSERT INTO rankings (option_id, voter_name, rank) VALUES (1, 'Ann', 1);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (2, 'Ann', 2);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (3, 'Ann', 3);

INSERT INTO rankings (option_id, voter_name, rank) VALUES (4, 'Alex', 1);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (5, 'Alex', 3);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (6, 'Alex', 2);

INSERT INTO rankings (option_id, voter_name, rank) VALUES (4, 'John', 3);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (5, 'John', 2);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (6, 'John', 1);

INSERT INTO rankings (option_id, voter_name, rank) VALUES (4, 'Ann', 1);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (5, 'Ann', 2);
INSERT INTO rankings (option_id, voter_name, rank) VALUES (6, 'Ann', 3);
