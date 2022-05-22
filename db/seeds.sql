INSERT INTO depts
  (dept_name)
VALUES
  ('Management'),
  ('Development'),
  ('Quality Assurance');

INSERT INTO roles
  (title, salary, depts_id)
VALUES
  ('Manager', 150000, 1),
  ('LeadDev', 100000, 1),
  ('Intern', 50000, 2),
  ('Developer', 75000, 2),
  ('QATester', 50000, 3);

INSERT INTO employees
  (first_name, last_name, role_id)
VALUES
  ('John', 'Smith', 2),
  ('Esme', 'Perez', 3),
  ('Quintin', 'Williams', 1),
  ('Anya', 'Nowak', 4),
  ('Kwame', 'Ture', 1);