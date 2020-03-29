BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "employees" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
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
	"updatedAt"	NUMERIC
);
CREATE TABLE IF NOT EXISTS "customers" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"FirstName"	TEXT NOT NULL,
	"LastName"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL,
	"Address"	TEXT NOT NULL,
	"City"	TEXT NOT NULL,
	"Phone"	TEXT,
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
	FOREIGN KEY("ID_Customer") REFERENCES "customers"("ID"),
	FOREIGN KEY("ID_Employee") REFERENCES "employees"("ID")
);
CREATE TABLE IF NOT EXISTS "taxes" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"Name"	TEXT NOT NULL,
	"Value"	NUMERIC NOT NULL,
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
CREATE TABLE IF NOT EXISTS "items" (
	"ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"ItemName"	TEXT NOT NULL,
	"Quantity"	TEXT NOT NULL,
	"createdAt"	NUMERIC,
	"updatedAt"	NUMERIC
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
	FOREIGN KEY("ID_Customer") REFERENCES "customers"("ID"),
	FOREIGN KEY("ID_Employee") REFERENCES "employees"("ID")
);
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
	FOREIGN KEY("ID_OrdenM") REFERENCES "orden_masters"("ID"),
	FOREIGN KEY("ID_Item") REFERENCES "items"("ID"),
	FOREIGN KEY("ID_Tax") REFERENCES "taxes"("ID")
);
INSERT INTO "employees" ("ID","FirstName","LastName","Email","Address","City","UserName","Password","Language","Role","Phone","createdAt","updatedAt") VALUES (1,'Jose','Diaz','jose@gmail.com','jose1','Santo Domigo','jose','$2b$10$yzWlcgSWAFJ26BzVCGHkNefK4tHo4M4.sJLeR6en.w0hekyyIiZdy','ES','Vendedor','809-888-8888','2020-03-27 00:03:37.312 +00:00','2020-03-28 21:40:31.504 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (1,'Juan','Perez','juan@gmail.com','juan1','Santo Domigo','809-888-8888','2020-03-27 00:01:51.654 +00:00','2020-03-28 21:43:49.827 +00:00');
INSERT INTO "customers" ("ID","FirstName","LastName","Email","Address","City","Phone","createdAt","updatedAt") VALUES (2,'Pedro','Tavarez','pedro@gmail.com','pedro','Santo Domigo','809-888-8888','2020-03-28 22:06:55.658 +00:00','2020-03-28 22:06:55.658 +00:00');
INSERT INTO "assigns" ("ID","ID_Employee","ID_Customer","DescriptionTask","createdAt","updatedAt") VALUES (1,4,1,'Asignacion','2020-03-28 21:28:39.896 +00:00','2020-03-29 23:18:29.892 +00:00');
INSERT INTO "assigns" ("ID","ID_Employee","ID_Customer","DescriptionTask","createdAt","updatedAt") VALUES (2,7,2,'Asignacion','2020-03-29 16:49:31.486 +00:00','2020-03-29 23:18:37.543 +00:00');
INSERT INTO "taxes" ("ID","Name","Value","createdAt","updatedAt") VALUES (1,'Exento',0,'2020-03-26 16:46:13.162 +00:00','2020-03-26 16:46:13.162 +00:00');
INSERT INTO "taxes" ("ID","Name","Value","createdAt","updatedAt") VALUES (2,'ITBIS',18,'2020-03-26 17:11:48.815 +00:00','2020-03-26 17:11:48.815 +00:00');
INSERT INTO "statuses" ("ID","Description","Value","createdAt","updatedAt") VALUES (1,'Activa',1,'2020-03-26 22:27:04.304 +00:00','2020-03-26 22:27:04.304 +00:00');
INSERT INTO "items" ("ID","ItemName","Quantity","createdAt","updatedAt") VALUES (1,'Jugo','10','2020-03-26 22:29:33.599 +00:00','2020-03-26 22:29:33.599 +00:00');
INSERT INTO "items" ("ID","ItemName","Quantity","createdAt","updatedAt") VALUES (2,'Agua','15','2020-03-27 00:17:23.068 +00:00','2020-03-27 00:17:23.068 +00:00');
INSERT INTO "orden_masters" ("ID","ID_Status","ID_Customer","ID_Employee","Confirmed","CancelationDate","PaymentMethod","createdAt","updatedAt") VALUES (1,1,1,1,0,'','credit card','2020-03-27 00:07:15.335 +00:00','2020-03-27 00:07:15.335 +00:00');
INSERT INTO "orden_details" ("ID","ID_OrdenM","MontoBruto","MontoNeto","Quantity","ID_Item","ID_Tax","createdAt","updatedAt") VALUES (1,1,20,20,5,1,1,'2020-03-27 00:15:22.815 +00:00','2020-03-27 00:15:22.815 +00:00');
INSERT INTO "orden_details" ("ID","ID_OrdenM","MontoBruto","MontoNeto","Quantity","ID_Item","ID_Tax","createdAt","updatedAt") VALUES (2,1,10,10,2,2,1,'2020-03-27 00:17:49.828 +00:00','2020-03-27 00:17:49.828 +00:00');
CREATE VIEW customerviews
AS
select t0.ID, t1.ID as ID_Customer, t1.FirstName, t1.LastName, 
t1.Email, t1.Phone, t1.Address, t1.City,
t2.FirstName as NameEmployee, t2.LastName as LastNameEmployee, 
t1.createdAt, t1.updatedAt,
t0.DescriptionTask from assigns t0
INNER JOIN customers t1 on t0.ID_Customer = t1.ID
INNER JOIN employees t2 on t0.ID_Employee = t2.ID;
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
COMMIT;
