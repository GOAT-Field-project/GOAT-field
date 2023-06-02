


CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL, 
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  role VARCHAR(255) 
);

CREATE TABLE pitch (
  id SERIAL PRIMARY KEY,
  image_data bytea[],
  name VARCHAR(255),
  price INT,
  size VARCHAR(100),
  details TEXT,
  description TEXT,
  location TEXT
);


