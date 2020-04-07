BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "orden_details" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"ID_OrdenM"	INTEGER NOT NULL,
	"MontoBruto"	NUMERIC NOT NULL,
	"MontoNeto"	NUMERIC NOT NULL,
	"Quantity"	INTEGER NOT NULL,
	"ID_Item"	INTEGER NOT NULL,
	"ID_Tax"	INTEGER NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC,
	FOREIGN KEY("ID_Tax") REFERENCES "taxes"("ID"),
	FOREIGN KEY("ID_Item") REFERENCES "items"("ID"),
	FOREIGN KEY("ID_OrdenM") REFERENCES "orden_masters"("ID")
);
CREATE TABLE IF NOT EXISTS "orden_masters" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"ID_Status"	INTEGER NOT NULL,
	"ID_Customer"	INTEGER NOT NULL,
	"ID_Employee"	INTEGER NOT NULL,
	"Confirmed"	INTEGER NOT NULL,
	"CancelationDate"	NUMERIC NOT NULL,
	"PaymentMethod"	TEXT NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC,
	FOREIGN KEY("ID_Status") REFERENCES "statuses"("ID"),
	FOREIGN KEY("ID_Employee") REFERENCES "employees"("ID"),
	FOREIGN KEY("ID_Customer") REFERENCES "customers"("ID")
);
CREATE TABLE IF NOT EXISTS "items" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"ItemName"	TEXT NOT NULL,
	"Quantity"	TEXT NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC
);
CREATE TABLE IF NOT EXISTS "statuses" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"Description"	TEXT NOT NULL,
	"Value"	INTEGER NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC
);
CREATE TABLE IF NOT EXISTS "taxes" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"Name"	TEXT NOT NULL,
	"Value"	NUMERIC NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC
);
CREATE TABLE IF NOT EXISTS "assigns" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"ID_Employee"	INTEGER,
	"ID_Customer"	INTEGER,
	"DescriptionTask"	TEXT NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC,
	FOREIGN KEY("ID_Employee") REFERENCES "employees"("ID"),
	FOREIGN KEY("ID_Customer") REFERENCES "customers"("ID")
);
CREATE TABLE IF NOT EXISTS "customers" (
	"ID"	INTEGER,
	"FirstName"	TEXT NOT NULL,
	"LastName"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL,
	"Address"	TEXT NOT NULL,
	"City"	TEXT NOT NULL,
	"Phone"	TEXT,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC,
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "employees" (
	"ID"	INTEGER,
	"FirstName"	TEXT NOT NULL,
	"LastName"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL,
	"Address"	TEXT NOT NULL,
	"City"	TEXT NOT NULL,
	"UserName"	TEXT NOT NULL,
	"Password"	TEXT NOT NULL,
	"Language"	TEXT NOT NULL,
	"Role"	TEXT,
	"Phone"	TEXT,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC,
	PRIMARY KEY("ID")
);
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (1,'Amy','Lauterbach','Birds@Intuit.com','4581 Finch St.','Bayshore','(650) 555-3311','2020-04-07 20:50:35.325 +00:00','2020-04-07 20:50:35.325 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (2,'Bill','Lucchini','Surf@Intuit.com','12 Ocean Dr.','Half Moon Bay','(415) 444-6538','2020-04-07 20:51:17.229 +00:00','2020-04-07 20:51:17.229 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (3,'Grace','Pariente','Cool_Cars@intuit.com','65 Ocean Dr.','Half Moon Bay','(415) 555-9933','2020-04-07 20:51:51.774 +00:00','2020-04-07 20:51:51.774 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (4,'Diego','Rodriguez','Diego@Rodriguez.com','321 Channing','Palo Alto','(650) 555-4477','2020-04-07 20:52:27.075 +00:00','2020-04-07 20:52:27.075 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (5,'Peter','Dukes','Dukes_bball@intuit.com','25 Court St.','Tucson','(520) 420-5638','2020-04-07 20:52:54.919 +00:00','2020-04-07 20:52:54.919 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (6,'Dylan','Sollfrank','','','','','2020-04-07 20:55:29.184 +00:00','2020-04-07 20:55:29.184 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (7,'Kirby','Freeman','Sporting_goods@intuit.com','370 Easy St.','Middlefield','(650) 555-0987','2020-04-07 20:55:59.257 +00:00','2020-04-07 20:55:59.257 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (8,'Sasha','Tillou','Sporting_goods@intuit.com','370 Easy St.','Middlefield','(415) 555-9933','2020-04-07 20:56:22.459 +00:00','2020-04-07 20:56:22.459 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (9,'Geeta','Kalapatapu','Geeta@Kalapatapu.com','1987 Main St.','Middlefield','(650) 555-0022','2020-04-07 20:57:21.391 +00:00','2020-04-07 20:57:21.391 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (10,'Lisa','Gevelber','Photography@intuit.com','1045 Main St.','Half Moon Bay','(415) 222-4345','2020-04-07 20:57:56.591 +00:00','2020-04-07 20:57:56.591 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (11,'Jeff','Chin','Jalopies@intuit.com','12 Willow Rd.','Menlo Park','(650) 555-8989','2020-04-07 20:58:21.136 +00:00','2020-04-07 20:58:21.136 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (12,'John','Melton','John@Melton.com','85 Pine St.','Menlo Park','(650) 555-5879','2020-04-07 20:58:46.963 +00:00','2020-04-07 20:58:46.963 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (13,'Kate','Whelan','Kate@Whelan.com','45 First St.','Menlo Park','(650) 554-8822','2020-04-07 20:59:15.200 +00:00','2020-04-07 20:59:15.200 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (14,'Kathy','Kuplis','qbwebsamplecompany@yahoo.com','789 Sugar Lane','Middlefield','(650) 555-7896','2020-04-07 20:59:41.415 +00:00','2020-04-07 20:59:41.415 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (15,'Mark','Cho','Mark@Cho.com','36 Willow Rd','Menlo Park','(650) 554-1479','2020-04-07 21:00:21.416 +00:00','2020-04-07 21:00:21.416 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (16,'Kathy','Paulsen','Medical@intuit.com','900 Main St.','Middlefield','(650) 557-4569','2020-04-07 21:00:49.641 +00:00','2020-04-07 21:00:49.641 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (17,'Karen','Pye','pyescakes@intuit.com','350 Mountain View Dr.','South Orange','(973) 555-4652','2020-04-07 21:01:17.562 +00:00','2020-04-07 21:01:17.562 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (18,'Jeff','Rago','Rago_Travel@intuit.com','753 Cedar St.','Bayshore','(650) 555-1596','2020-04-07 21:01:41.782 +00:00','2020-04-07 21:01:41.782 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (19,'Stephanie','Martini','qbwebsamplecompany@yahoo.com','500 Red Rock Rd.','Bayshore','(650) 555-4973','2020-04-07 21:02:07.757 +00:00','2020-04-07 21:02:07.757 +00:00');
INSERT INTO "employees" ("ID","FirstName","LastName","Email","Address","City","UserName","Password","Language","Role","Phone","createdAt","updatedAt") VALUES (58,'Jose','Diaz','jose@gmail.com','45 N. Elm Street','Santo Domingo','jose','$2b$10$/9TtporUmGMrfUjcp/PWt.nYvTX0UoD2FsZFAVJUunhj36QwKHYZy','ES',NULL,'(809)525-1234','2020-04-07 20:30:58.945 +00:00','2020-04-07 20:30:58.945 +00:00');
CREATE VIEW consultas
as
select t1.ID, t2.Description, t3.FirstName as CustName, t3.LastName as CustLastName,
t4.FirstName as EmplName, t4.LastName as EmplLastName, t4.Role,  t0.Confirmed, t0.PaymentMethod,
t1.MontoBruto, t1.MontoNeto, t1.Quantity, t5.ItemName, t6.Name, t6.Value as Valor,
t1.createdAt, t1.updatedAt from orden_masters t0
inner join orden_details t1 on t0.ID = t1.ID_OrdenM
inner join statuses t2 on t0.ID_Status = t2.ID
inner join customers t3 on t0.ID_Customer = t3.ID
inner join employees t4 on t0.ID_Employee = t4.ID
inner join items t5 on t1.ID_Item = t5.ID
inner join taxes t6 on t1.ID_Tax = t6.ID;
CREATE VIEW customerviews
AS
select t0.ID, t1.ID as ID_Customer, t1.FirstName, t1.LastName, 
t1.Email, t1.Phone, t1.Address, t1.City,
t2.FirstName as NameEmployee, t2.LastName as LastNameEmployee, 
t1.createdAt, t1.updatedAt,
t0.DescriptionTask from assigns t0
INNER JOIN customers t1 on t0.ID_Customer = t1.ID
INNER JOIN employees t2 on t0.ID_Employee = t2.ID;
COMMIT;
