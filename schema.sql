CREATE TABLE "Users" (
  "name" text,
  "email" text,
  "phone" text,
  "id" bigint,
  "address" json NULL,
  "company" json NULL,
  "username" text NULL,
  "website" text NULL
);

CREATE TABLE "Colleges" (
  "id" bigint,
  "name" text,
  "phone" text,
  "email" text,
  "principal" text,
  "ipAddress" text
);

CREATE TABLE "Courses" (
  "id" bigint,
  "name" text,
  "totalMarks" bigint,
  "incharge" bigint,
  "years" bigint
);

CREATE TABLE "Subjects" (
  "id" bigint,
  "name" text,
  "totalMarks" bigint,
  "passMarks" bigint,
  "lecturer" text,
  "course_id" bigint,
  FOREIGN KEY (course_id) REFERENCES Courses(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE "Exams" (
  "id" bigint,
  "name" text,
  "subject_id" bigint,
  "passMarks" bigint,
  "course_id" bigint,
  "paper" bigint,
  "examTime" text,
  "duration" bigint,
  FOREIGN KEY (course_id) REFERENCES Courses(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  FOREIGN KEY (subject_id) REFERENCES Subjects(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
);

CREATE TABLE "Files" (
  "id" bigint,
  "fileName" text,
  "fileType" text,
  "fileUrl" text,
  "uploadedAt" text
);

INSERT INTO "Users" VALUES
('Ervin Howell','Ervin@melissa.tv','010-692-6593 x09125',2,NULL,NULL,NULL,NULL),
('Clementine Bauch','Nathan@yesenia.net','1-463-123-4447',3,'{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}}','{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}','Samantha','ramiro.info'),
('Patricia Lebsack','Julianne.OConner@kory.org','493-170-9623 x156',4,'{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}}','{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}','Karianne','kale.biz'),
('Chelsey Dietrich','Lucio_Hettinger@annie.ca','(254)954-1289',5,'{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}}','{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}','Kamren','demarco.info'),
('Mrs. Dennis Schulist','Karley_Dach@jasper.info','1-477-935-8478 x6430',6,'{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}}','{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}','Leopoldo_Corkery','ola.org'),
('Kurtis Weissnat','Telly.Hoeger@billy.biz','210.067.6132',7,'{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}}','{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}','Elwyn.Skiles','elvis.io');

INSERT INTO "Colleges" VALUES
(1,'Rhybox','3332021803','tmccorkell0@mashable.com','1','84.123.179.240'),
(2,'Eazzy','9533620431','tadan1@ed.gov','2','237.130.184.223'),
(3,'Blogtag','3188818769','kmacduffie2@trellian.com','3','135.199.14.60'),
(4,'Tambee','6963184148','scaddell3@redcross.org','4','241.237.48.183'),
(5,'Riffwire','2129178548','ereichelt4@constantcontact.com','5','15.249.34.147'),
(6,'Blogtags','7581976938','tallam5@google.es','6','44.29.140.31'),
(7,'Nlounge','7832396637','nfairbanks6@about.com','7','28.95.116.236'),
(8,'Zoonder','8918269958','cwaren7@arizona.edu','8','151.103.251.114'),
(9,'Skaboo','8391699712','lsiman8@techcrunch.com','9','198.185.205.140'),
(10,'VNRVJIET','9988776655','vnr@vjiet.com','10','192.168.45.78');

INSERT INTO "Courses" VALUES
(1,'Kanlam',20,1,1),
(2,'Opela',31,2,2),
(3,'Duobam',93,3,1),
(4,'Latlux',74,4,2),
(5,'Bitwolf',77,5,2),
(6,'Bitchip',94,6,4),
(7,'Voltsillam',20,7,3),
(8,'Solarbreeze',84,8,4),
(9,'Biodex',16,9,4),
(10,'Pannier',18,10,2);

INSERT INTO "Subjects" VALUES
(1,'Treeflex',100,40,'Nessy Twinterman',1),
(2,'Gembucket',100,40,'Janenna Rudsdell',2),
(3,'Redhold',100,40,'Nicky Tolumello',3),
(4,'Alphazap',100,40,'Jimmy Lomond',4),
(5,'Tin',100,40,'Virge Facey',5),
(6,'Viva',100,40,'Cordell Leppington',6),
(7,'Veribet',100,40,'Josephina Ridge',7),
(8,'Tampflex',100,40,'Ema Sywell',8),
(9,'Konklux',100,40,'Holly Killick',9),
(10,'Prodder',100,40,'Godfree Catherall',10);

INSERT INTO "Exams" VALUES
(1,'Stim',1,40,1,1,'2023-11-28T16:01:57Z',180),
(2,'Trippledex',2,40,2,2,'2023-01-16T15:53:14Z',180),
(3,'Solarbreeze',3,40,3,3,'2022-12-24T00:08:25Z',180),
(4,'Voltsillam',4,404,4,4,'2023-11-12T08:22:03Z',180),
(5,'Zamit',5,40,5,5,'2023-10-22T11:58:30Z',180),
(6,'Domainer',6,40,6,6,'2023-04-26T01:46:39Z',180),
(7,'Veribet',7,40,7,7,'2023-09-22T17:45:08Z',180),
(8,'Holdlamis',8,40,8,8,'2023-03-14T01:27:47Z',180),
(9,'Transcof',9,40,9,9,'2023-05-29T02:11:11Z',180),
(10,'Daltfresh',10,40,10,10,'2022-12-22T21:12:51Z',180);

INSERT INTO "Files" VALUES
(1,'Nulla.avi','video/x-msvideo','https://ca.gov/dapibus/dolor/vel.aspx?lectus=proin&pellentesque=eu&eget=mi&nunc=nulla&donec=ac&quis=enim&orci=in&eget=tempor&orci=turpis&vehicula=nec&condimentum=euismod&curabitur=scelerisque&in=quam&libero=turpis&ut=adipiscing&massa=lorem&volutpat=vitae&convallis=mattis&morbi=nibh&odio=ligula&odio=nec&elementum=sem&eu=duis&interdum=aliquam','12/23/2022'),
(2,'At.mpeg','video/mpeg','http://sogou.com/maecenas/tincidunt/lacus/at.js?rhoncus=turpis&aliquam=donec&lacus=posuere&morbi=metus&quis=vitae&tortor=ipsum&id=aliquam&nulla=non&ultrices=mauris&aliquet=morbi&maecenas=non&leo=lectus&odio=aliquam&condimentum=sit&id=amet&luctus=diam&nec=in&molestie=magna&sed=bibendum&justo=imperdiet&pellentesque=nullam&viverra=orci&pede=pede&ac=venenatis&diam=non&cras=sodales&pellentesque=sed&volutpat=tincidunt&dui=eu&maecenas=felis&tristique=fusce&est=posuere&et=felis&tempus=sed&semper=lacus&est=morbi&quam=sem&pharetra=mauris&magna=laoreet&ac=ut&consequat=rhoncus&metus=aliquet&sapien=pulvinar&ut=sed&nunc=nisl&vestibulum=nunc&ante=rhoncus&ipsum=dui&primis=vel&in=sem&faucibus=sed&orci=sagittis&luctus=nam&et=congue&ultrices=risus&posuere=semper&cubilia=porta&curae=volutpat&mauris=quam&viverra=pede&diam=lobortis&vitae=ligula&quam=sit&suspendisse=amet&potenti=eleifend&nullam=pede&porttitor=libero&lacus=quis&at=orci&turpis=nullam&donec=molestie&posuere=nibh&metus=in&vitae=lectus&ipsum=pellentesque&aliquam=at&non=nulla&mauris=suspendisse&morbi=potenti&non=cras&lectus=in&aliquam=purus&sit=eu&amet=magna&diam=vulputate&in=luctus&magna=cum&bibendum=sociis&imperdiet=natoque&nullam=penatibus&orci=et&pede=magnis&venenatis=dis&non=parturient','9/7/2023'),
(3,'UltriciesEu.avi','video/avi','http://pcworld.com/vulputate/ut/ultrices/vel.js?cras=dui&mi=maecenas&pede=tristique&malesuada=est&in=et&imperdiet=tempus&et=semper&commodo=est&vulputate=quam&justo=pharetra&in=magna&blandit=ac&ultrices=consequat&enim=metus&lorem=sapien&ipsum=ut&dolor=nunc&sit=vestibulum&amet=ante&consectetuer=ipsum&adipiscing=primis&elit=in&proin=faucibus&interdum=orci&mauris=luctus&non=et&ligula=ultrices&pellentesque=posuere&ultrices=cubilia&phasellus=curae&id=mauris&sapien=viverra&in=diam&sapien=vitae&iaculis=quam&congue=suspendisse&vivamus=potenti&metus=nullam&arcu=porttitor&adipiscing=lacus&molestie=at&hendrerit=turpis&at=donec&vulputate=posuere&vitae=metus&nisl=vitae&aenean=ipsum&lectus=aliquam&pellentesque=non&eget=mauris&nunc=morbi&donec=non&quis=lectus&orci=aliquam&eget=sit&orci=amet&vehicula=diam&condimentum=in&curabitur=magna&in=bibendum&libero=imperdiet&ut=nullam&massa=orci&volutpat=pede&convallis=venenatis&morbi=non&odio=sodales&odio=sed&elementum=tincidunt&eu=eu&interdum=felis&eu=fusce&tincidunt=posuere&in=felis&leo=sed&maecenas=lacus&pulvinar=morbi&lobortis=sem','10/6/2023'),
(4,'JustoPellentesque.mp3','video/x-mpeg','http://istockphoto.com/neque/sapien/placerat.jpg?magna=quis&at=tortor&nunc=id&commodo=nulla&placerat=ultrices&praesent=aliquet&blandit=maecenas&nam=leo&nulla=odio&integer=condimentum&pede=id&justo=luctus&lacinia=nec&eget=molestie&tincidunt=sed&eget=justo&tempus=pellentesque&vel=viverra&pede=pede','8/5/2023'),
(5,'ElementumPellentesque.xls','application/x-msexcel','https://mozilla.com/cursus/id/turpis/integer.aspx?potenti=justo&nullam=pellentesque&porttitor=viverra&lacus=pede&at=ac&turpis=diam&donec=cras&posuere=pellentesque&metus=volutpat&vitae=dui&ipsum=maecenas&aliquam=tristique&non=est&mauris=et&morbi=tempus&non=semper&lectus=est&aliquam=quam&sit=pharetra&amet=magna&diam=ac&in=consequat&magna=metus&bibendum=sapien&imperdiet=ut&nullam=nunc&orci=vestibulum&pede=ante&venenatis=ipsum&non=primis&sodales=in&sed=faucibus&tincidunt=orci&eu=luctus&felis=et&fusce=ultrices&posuere=posuere&felis=cubilia&sed=curae&lacus=mauris&morbi=viverra&sem=diam&mauris=vitae&laoreet=quam&ut=suspendisse&rhoncus=potenti&aliquet=nullam&pulvinar=porttitor&sed=lacus&nisl=at&nunc=turpis&rhoncus=donec&dui=posuere&vel=metus&sem=vitae&sed=ipsum&sagittis=aliquam&nam=non&congue=mauris&risus=morbi&semper=non&porta=lectus&volutpat=aliquam&quam=sit&pede=amet&lobortis=diam&ligula=in&sit=magna&amet=bibendum&eleifend=imperdiet&pede=nullam&libero=orci&quis=pede&orci=venenatis&nullam=non&molestie=sodales&nibh=sed&in=tincidunt&lectus=eu&pellentesque=felis&at=fusce&nulla=posuere&suspendisse=felis&potenti=sed&cras=lacus&in=morbi&purus=sem&eu=mauris&magna=laoreet&vulputate=ut&luctus=rhoncus&cum=aliquet&sociis=pulvinar&natoque=sed&penatibus=nisl&et=nunc&magnis=rhoncus&dis=dui&parturient=vel&montes=sem','8/21/2023'),
(6,'Nisi.xls','application/x-msexcel','http://adobe.com/parturient/montes/nascetur.js?porta=aliquet&volutpat=maecenas&erat=leo&quisque=odio&erat=condimentum&eros=id&viverra=luctus&eget=nec&congue=molestie&eget=sed&semper=justo&rutrum=pellentesque&nulla=viverra&nunc=pede&purus=ac&phasellus=diam&in=cras&felis=pellentesque&donec=volutpat&semper=dui&sapien=maecenas&a=tristique&libero=est&nam=et&dui=tempus&proin=semper&leo=est&odio=quam&porttitor=pharetra&id=magna&consequat=ac&in=consequat&consequat=metus&ut=sapien&nulla=ut&sed=nunc&accumsan=vestibulum&felis=ante&ut=ipsum&at=primis&dolor=in&quis=faucibus&odio=orci&consequat=luctus&varius=et&integer=ultrices&ac=posuere&leo=cubilia&pellentesque=curae&ultrices=mauris&mattis=viverra&odio=diam&donec=vitae&vitae=quam&nisi=suspendisse&nam=potenti&ultrices=nullam&libero=porttitor&non=lacus&mattis=at&pulvinar=turpis&nulla=donec&pede=posuere&ullamcorper=metus&augue=vitae&a=ipsum&suscipit=aliquam&nulla=non&elit=mauris&ac=morbi&nulla=non&sed=lectus&vel=aliquam&enim=sit&sit=amet&amet=diam&nunc=in&viverra=magna&dapibus=bibendum&nulla=imperdiet','7/2/2023'),
(7,'FaucibusOrciLuctus.ppt','application/x-mspowerpoint','http://blogs.com/ut/tellus.png?posuere=justo&cubilia=lacinia&curae=eget&mauris=tincidunt&viverra=eget&diam=tempus&vitae=vel&quam=pede&suspendisse=morbi&potenti=porttitor&nullam=lorem&porttitor=id&lacus=ligula&at=suspendisse&turpis=ornare&donec=consequat&posuere=lectus&metus=in&vitae=est&ipsum=risus&aliquam=auctor&non=sed&mauris=tristique&morbi=in&non=tempus&lectus=sit&aliquam=amet&sit=sem&amet=fusce&diam=consequat&in=nulla&magna=nisl&bibendum=nunc&imperdiet=nisl&nullam=duis&orci=bibendum&pede=felis&venenatis=sed&non=interdum&sodales=venenatis&sed=turpis&tincidunt=enim&eu=blandit&felis=mi&fusce=in&posuere=porttitor&felis=pede&sed=justo&lacus=eu&morbi=massa&sem=donec&mauris=dapibus&laoreet=duis&ut=at&rhoncus=velit&aliquet=eu&pulvinar=est&sed=congue&nisl=elementum&nunc=in&rhoncus=hac&dui=habitasse&vel=platea&sem=dictumst&sed=morbi&sagittis=vestibulum&nam=velit&congue=id&risus=pretium&semper=iaculis&porta=diam&volutpat=erat&quam=fermentum&pede=justo&lobortis=nec&ligula=condimentum&sit=neque&amet=sapien&eleifend=placerat&pede=ante&libero=nulla&quis=justo&orci=aliquam&nullam=quis','4/17/2023'),
(8,'EratNulla.jpeg','image/jpeg','http://blinklist.com/et/ultrices/posuere/cubilia/curae/mauris/viverra.aspx?in=lacus&libero=morbi&ut=quis&massa=tortor&volutpat=id&convallis=nulla&morbi=ultrices&odio=aliquet&odio=maecenas&elementum=leo&eu=odio&interdum=condimentum&eu=id','5/17/2023'),
(9,'Nulla.avi','video/msvideo','http://businessweek.com/curae/duis/faucibus/accumsan/odio/curabitur/convallis.js?accumsan=nullam&felis=orci&ut=pede&at=venenatis&dolor=non','4/5/2023'),
(10,'AliquetMassaId.avi','video/msvideo','https://foxnews.com/integer/ac/neque/duis/bibendum/morbi.aspx?pede=in&ac=faucibus&diam=orci&cras=luctus&pellentesque=et&volutpat=ultrices&dui=posuere&maecenas=cubilia&tristique=curae&est=duis&et=faucibus&tempus=accumsan&semper=odio&est=curabitur&quam=convallis&pharetra=duis&magna=consequat&ac=dui&consequat=nec&metus=nisi&sapien=volutpat&ut=eleifend&nunc=donec&vestibulum=ut&ante=dolor&ipsum=morbi&primis=vel&in=lectus&faucibus=in&orci=quam&luctus=fringilla&et=rhoncus&ultrices=mauris&posuere=enim&cubilia=leo&curae=rhoncus&mauris=sed&viverra=vestibulum&diam=sit&vitae=amet&quam=cursus&suspendisse=id','12/16/2022');
