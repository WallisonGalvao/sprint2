create database sprint2;
use sprint2;

create table Cliente(
idCliente int primary key auto_increment,
Nome varchar (60),
Razão_social varchar (55),
telefone char (10),
Email varchar(55),
check (Email like '%@_%'),
CPF varchar (14),
CNPJ VARCHAR (18),
Senha varchar (45),
telefone_fixo varchar(10)
);

select * from Cliente;


create table Fazenda(
idfazenda int primary key auto_increment,
Cep char (9),
Logradouro varchar (80),
Cidade varchar (45),
Estado char (2)
);

select * from fazenda;

create table sensor(
idSensor int primary key auto_increment,
Data_Hora datetime,
Valor_da_Temperatura float,
Valor_da_Umidade float,
Status_sensor varchar (10),
check (status_sensor = 'ativo' or status_sensor = 'inativo'),
qtdSensores int,
tipo_do_sensor varchar (5),
check (tipo_do_sensor = 'DHT11')
);  

create table Historico(
idHistorico int primary key auto_increment,
Data_Hora datetime,
Tipo_do_sensor varchar (45),
check (Tipo_do_sensor = 'DHT11'),
Localizacao varchar(45),
Valor_da_Temperatura float,
Valor_da_Umidade float
);



insert into Cliente values 
(null, 'Mario' , 'Mario Coffe' ,'1126563985' , 'mario123@gmail.com' , '45321268635421', '785632125478563212' , 'mario321' , '1125635457' ),
(null, 'Maria' ,'Maria Cultivo' ,'1124658932' , 'maria321@gmail.com' , '47896356985124','425423658541256354' , 'mariacoffe2021' , '1124569851' ),
(null, 'Cleide', 'Cleide Graõs de Café ' , '1165963545' , 'cleide256@gmail.com', '42565854635124' , '256354857541236589' , 'cleidecafe0102' , '1125436598' ),
(null, 'Amanda' , 'Amanda cultivo','1125854430' , 'amandaga@gmail.com', '43212569856321' , '453652125696325421' , 'cafebom2021' , '1125632125' ),
(null, 'Luma' , 'Luma cultivo','1125854585' , 'luma@gmail.com', '47892569856321' , '472352125696325421' , 'cafe2021luma' , '1123132124' );

insert into Fazenda values
(null , '081802365' , 'Complexo Das Fazendas', 'São Paulo' , 'SP' ),
(null , '082365459' , 'Agricultor Feijó' , 'Rio de Janeiro' , 'RJ' ),
(null , '087453629' , 'Cafeeira', 'Acre' , 'AC' ),
(null , '083503829' , 'Santa Rita', 'Ceará' , 'CE' ),
(null , '025689632' , 'Santana' , 'Minas Gerais' , 'MG');

select * from sensor;

insert into sensor values
(null  , '2021/10/03   14:00:10  ','20', '30' , 'ativo' ,  '20' , 'DHT11'),
(null , '2021/10/04   18:00:05' ,'30','20', 'inativo' , '30' , 'DHT11'),
(null , '2021/09/06   09:55:03', '15', '10' , 'ativo' , '15' , 'DHT11'),
(null , '2021/10/16   19:43:43', '20', '10' , 'ativo' , '45' , 'DHT11'),
(null , '2021/09/04   09:55:40' , '20', '25'  ,'inativo' , '10' , 'DHT11');


select * from historico;

insert into historico values
(null ,  '2021/02/03  12:55:10' , 'DHT11' , 'setor A' , '20' , '30'),
(null, '2021/05/10  13:45:13' , 'DHT11' , 'setor B' , '30' , '20'),
(null  , '2021/08/06  18:55:30' , 'DHT11' , 'setor C' , '15' , '10'),
(null  , '2021/06/03  12:09:16' , 'DHT11' , 'setor D' , '20' , '10'),
(null  , '2021/06/03  12:09:16' , 'DHT11' , 'setor D' , '20' , '25');

select * from fazenda;


alter table Fazenda add column fkcliente int;
alter table Fazenda add foreign key (fkcliente) references Cliente(idCliente);

update Fazenda set fkcliente = 2 where idfazenda = 4;
update Fazenda set fkcliente = 3 where idfazenda = 3;
update Fazenda set fkcliente = 4 where idfazenda = 1;
update Fazenda set fkcliente = 1 where idfazenda = 2;
update Fazenda set fkcliente = 5 where idfazenda = 5;





alter table sensor add column fkfazenda int;
alter table sensor add foreign key (fkfazenda) references fazenda(idfazenda);

update sensor set fkfazenda = 5 where idsensor = 5;
update sensor set fkfazenda = 4 where idsensor = 4;
update sensor set fkfazenda = 3 where idsensor = 3;
update sensor set fkfazenda = 2 where idsensor = 2;
update sensor set fkfazenda = 1 where idsensor = 1;
 
 desc historico;
 
 
 
 alter table Historico add column fksensor int;
 alter table Historico add foreign key (fksensor) references sensor(idsensor);
 
  update Historico set fksensor = 5 where idhistorico = 5;
 update Historico set fksensor = 2 where idhistorico = 3;
  update Historico set fksensor = 3 where idhistorico = 1;
  update Historico set fksensor = 1 where idhistorico = 4;
   update Historico set fksensor = 4 where idhistorico = 2;
   
select * from cliente join fazenda join sensor on fkfazenda=idfazenda and fkcliente = idcliente;



select Cliente.Nome , Cliente.telefone, Cliente.email, Cliente.senha, 
 fazenda.idFazenda, fazenda.Cep, fazenda.Logradouro, fazenda.Cidade, fazenda.Estado,
 sensor.idsensor, sensor.Valor_da_Temperatura, sensor.Valor_da_Umidade, sensor.Data_hora,
 sensor.status_sensor, sensor.qtdSensores, historico.idHistorico, Historico.Data_Hora, Historico.Tipo_do_sensor, historico.Localizacao
 from Cliente join Sensor join Fazenda join historico on fkfazenda = idfazenda and fkcliente = idcliente and fksensor = idsensor;
 

SELECT Cliente.Nome , Cliente.telefone,  Cliente.senha, 
 fazenda.idFazenda, fazenda.Cep, fazenda.Logradouro, fazenda.Cidade, fazenda.Estado,
 sensor.idsensor, sensor.Valor_da_Temperatura, sensor.Valor_da_Umidade, sensor.Data_hora,
 sensor.status_sensor, sensor.qtdSensores, historico.idHistorico, Historico.Data_Hora, Historico.Tipo_do_sensor, historico.Localizacao ,email, subString_index(email, '@', -1) as domínio FROM Cliente join Sensor join Fazenda join historico on fkfazenda = idfazenda and fkcliente = idcliente and fksensor = idsensor;



-- insert para o Brandão --

insert into Cliente values
(null, 'Fernado Brandão' , 'Fazenda Brandão' ,'1125563789' , 'febrandao@gmail.com' , '48961268635421', '753632355478563212' , 'fer2021' , '1125645789');

insert into Fazenda values
(null , '078262365' , ' Fazendas Cultivo', 'São Paulo' , 'SP' );

insert into sensor values
(null  , '2021/04/05   14:55:10  ','16', '22' , 'ativo' ,  '23' , 'DHT11');

insert into historico values
(null ,  '2021/02/03  13:45:10' , 'DHT11' , 'setor E' , '24' , '33');

select 
Cliente.Nome , Cliente.telefone, Cliente.email, Cliente.senha, 
 fazenda.idFazenda, fazenda.Cep, fazenda.Logradouro, fazenda.Cidade, fazenda.Estado,
 sensor.idsensor, sensor.Valor_da_Temperatura, sensor.Valor_da_Umidade, sensor.Data_hora,
 sensor.status_sensor, sensor.qtdSensores, historico.idHistorico, Historico.Data_Hora, Historico.Tipo_do_sensor, historico.Localizacao
 from Cliente join Sensor join Fazenda join historico on fkfazenda = idfazenda and fkcliente = idcliente and fksensor = idsensor 
 where Nome like 'Fernado Brandão';
