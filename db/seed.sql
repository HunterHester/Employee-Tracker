INSERT INTO department 
    (name)
VALUES
    ('Legal'),
    ('Engineering'),
    ('Information Technology'),
    ('Marketing');

INSERT INTO role 
    (title, salary, department_id)
VALUES
    ('Lawyer', 300000, 1),
    ('Software Engineer', 140000, 2),
    ('Digital Desginer', 75000, 3),
    ('HelpDesk Associate', 60000, 4),
    ('Manager', 1000000, 5);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Matt', 'West', 3, 1),
    ('Jacob', 'Palmer', 1, 1),
    ('Suat', 'Seals', 5, NULL),
    ('Jeremy', 'Davis', 4, 1),
    ('Mung', 'Daal', 1, 1),
    ('Matthew', 'Kovac', 2, 1);

