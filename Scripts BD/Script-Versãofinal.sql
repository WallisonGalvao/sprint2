create database CoffeeAnalytics;

use CoffeeAnalytics;

create table Cliente(

	CPF_CNPJ VARCHAR(16),
	dtNascimento DATE,
	Nome_RazãoSocial varchar (45),
	email varchar(45),
    telefone varchar (20),
    Logradouro VARCHAR(80),
    CEP char (9),
	cidade varchar (30),
	estado char (2),
    
	senha varchar (45),
    primary key (CPF_CNPJ, email)
  
    

);

select * from Cliente;


create table Fazenda(
idfazenda int primary key auto_increment,
nomeFazenda varchar(75),
Logradouro varchar(80),
Número int,
CEP char(9),
Cidade varchar(30),
Estado CHAR(2),
fkCliente VARCHAR(45)
);

ALTER TABLE Fazenda ADD FOREIGN KEY (fkCliente) REFERENCES Cliente (CPF_CNPJ);

select * from fazenda;

create table sensor(
idSensor int primary key auto_increment,
Setor VARCHAR(20),
tipoSensor VARCHAR(20),
Status_sensor varchar (10),
check (status_sensor = 'ativo' or status_sensor = 'inativo'),
Data_Hora datetime,
Valor_da_Temperatura double,
Valor_da_Umidade double,
fkFazenda int

);

ALTER TABLE sensor ADD FOREIGN KEY (fkFazenda) REFERENCES Fazenda (idfazenda);

--  create table HistoricoRegistros(
-- idHistorico int primary key auto_increment,
-- check (Tipo_do_sensor = 'DHT11'),
#fkSensor int
#);

#ALTER TABLE HistoricoRegistros ADD FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor);



insert into Cliente values 
( '58462333314', '1989-12-23', 'Mario',  'mario123@gmail.com', '1126563985' ,  'Estrada Virgina Woolf',  '08155-980', 'São Paulo', 'SP' , 'mario123'),
( '12656709000159', '1994-06-05', 'Café Maria', 'cafemaria321@gmail.com' ,  '1124658932' , 'Avenida São Tomé', '58846-020',  'Barra do Piraí' , 'RJ' , 'kaffeerj'),
( '52789111000345' , '1988-04-03', 'Cleide','cleide256@gmail.com' , '1165963545' , 'Rodovia Hugo Tavares', '20155-581',  'Bahia' , 'BA' , 'Cleidezn'),
( '23256845632', '1982-06-02', 'Amanda', 'amandaga@gmail.com' , '1125854430', 'Rua das Lágrimas', '54214-055', 'Rio Branco',  'AC' , 'amanda56');

insert into Fazenda values
(null, 'Fazenda Mario', 'BR 135 KM 8', 304 , '04562-152', 'Piracicaba', 'SP', '58462333314'),
(null, 'Café Maria', 'BR 220 KM 15', 10389 , '58689-424', 'Barra do Piraí', 'RJ', '12656709000159'),
(null, 'Fazenda Cleide', 'BR 104 KM 56', 1374 , '20846-965', 'Juazeiro', 'BA', '52789111000345'),
(null, 'Amanda Coffee', 'BR 10 KM 84', 83 , '04562-152', 'Rio Branco', 'AC', '23256845632'),
(null, 'Amanda Coffee', 'BR 9 KM 15', 204 , '0652-000', 'Manuel Urbano', 'AC', '23256845632');





insert into sensor values
(null,  'Setor A', 'DHT11', 'ativo', '2021/10/03   14:00:10 ',  20.1, 20.87, 1),
(null,  'Setor A1', 'DHT11', 'ativo', '2021/11/07   08:52:13 ',  19.4, 30.53, 1),
(null, 'Setor Beta', 'DHT11', 'inativo', null, null, null, 2),
(null, 'Setor Beta 2', 'DHT11', 'ativo', '2021/08/23  06:32:07', 18.42, 40.54, 2),
(null, 'Setor C', 'DHT11', 'ativo', '2021/09/06   09:55:37', 18.67, 67.32, 3),
(null, 'Setor C4', 'DHT11', 'ativo', '2021/12/26   16:15:03', 24.7, 41.89, 3),
(null, 'Setor Delta', 'DHT11', 'inativo', null, null, null, 4),
(null, 'Setor Alfa', 'DHT11', 'ativo', '2021-09-23 05:47:32', 20.49, 30.58, 4),
(null, 'Setor 1', 'DHT11', 'ativo', '2021-09-24 09:27:52', 19.74, 33.48, 5);

select * from sensor;



insert into  HistoricoRegistros values
(null, 'DHT11', 1),
(null, 'DHT11', 1),
(null,'DHT11', 2),
(null,'DHT11', 2),
(null,'DHT11', 3),
(null,'DHT11', 3),
(null,'DHT11', 4),
(null,'DHT11', 4),
(null,'DHT11', 5);

   
select * from Cliente join fazenda join sensor on fkfazenda=idfazenda and fkCliente = CPF_CNPJ;


select Cliente.Nome_RazãoSocial , Cliente.telefone, Cliente.email, Cliente.senha, Cliente.cidade, Cliente.estado,
 sensor.idsensor, sensor.Valor_da_Temperatura, sensor.Valor_da_Umidade, sensor.Data_hora,
 sensor.status_sensor
 from Cliente join Sensor join Fazenda on fkfazenda = idfazenda and fkCliente = CPF_CNPJ;