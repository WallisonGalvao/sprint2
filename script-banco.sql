create table Cadastro(
idCadastro int primary key auto_increment,
Nome varchar (20),
telefone char (10),
email varchar(30),
cidade varchar (30),
estado char (2),
senha varchar (8)
);

select * from Cadastro;


create table sensorUmidade(
idSensor int primary key auto_increment,
Valor_Umidade varchar (30) ,
Data_Hora datetime,
qtdSensores int,
setor varchar (15)
);

select * from sensorUmidade;

create table sensorTemperatura(
idSensor int primary key auto_increment,
Valor_Temperatura double,
Data_Hora datetime,
qtdSensores int,
setor varchar (15)
);


insert into Cadastro values 
(null, 'mario' , '1126563985' , 'mario123@gmail.com' , 'sao paulo' , 'SP' , 'mario123'),
(null, 'maria' , '1124658932' , 'maria321@gmail.com' , 'rio de janeiro' , 'RJ' , 'mariarj3'),
(null, 'cleide' , '1165963545' , 'cleide256@gmail.com' , 'Bahia' , 'BA' , 'Cleidezn'),
(null, 'amanda' , '1125854430' , 'amandaga@gmail.com' , 'Acre' , 'AC' , 'amanda56');


select * from cadastro;

insert into sensorUmidade values
(null ,'20%','2021/10/03   14:00:10 ','10', 'setor A'),
(null ,'30%','2021/10/04   18:00:5', '20', 'setor B'),
(null ,'15%','2021/09/06   09:55:3',  '5', 'setor C'),
(null ,'20%','2021/09/04   09:55:40' ,'6' , 'setor D');


select * from sensorTemperatura;

insert into sensorTemperatura values
(null , '20.5' , '2021/02/03  12:55:10' , '10' , 'setor A'),
(null , '25.5' , '2021/05/10  13:45:13' , '1' , 'setor B'),
(null , '17.9' , '2021/08/06  18:55:30' , '15' , 'setor C'),
(null , '20.5' , '2021/06/03  12:09:16' , '19' , 'setor D');

select * from  sensorumidade;

alter table sensorUmidade add column fkcadastro int;
alter table sensorUmidade add foreign key (fkcadastro) references cadastro(idcadastro);

update sensorUmidade set fkcadastro = 1 where idsensor = 2;
update sensorumidade set fkcadastro = 2 where idsensor = 1;
update sensorumidade set fkcadastro = 3 where idsensor = 4;
update sensorumidade set fkcadastro = 4 where idsensor = 3;

select * from cadastro join sensorUmidade   ;

select * from cadastro join sensorumidade on fkcadastro=idcadastro;

select * from cadastro join sensorumidade on fkcadastro=idcadastro group by nome ;



alter table sensortemperatura add column fkcadastro int;
alter table sensortemperatura add foreign key (fkcadastro) references cadastro(idcadastro);

desc sensortemperatura;

select * from sensortemperatura;

update sensortemperatura set fkcadastro = 2 where idsensor = 3;
update sensortemperatura set fkcadastro = 1 where idsensor = 2;
update sensortemperatura set fkcadastro = 3 where idsensor = 1;
update sensortemperatura set fkcadastro = 4 where idsensor = 4;






