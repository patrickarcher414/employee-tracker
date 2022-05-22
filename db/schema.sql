DROP TABLE IF EXISTS depts;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;



CREATE TABLE depts (
  id INT AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  depts_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (depts_id) REFERENCES depts(id)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  -- manager_id select id from employees where title='manager'
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

SELECT * FROM depts;
SELECT * FROM roles;
SELECT * FROM employees;